import connectDB from "../db/connect.js";
import { StatusCodes } from "http-status-codes";
import {
    BadRequestError,
    NotFoundError
} from "../errors/index.js";

/**
 * Queries the database to get all the phone mappings. Originally thought would need the ROW_NUMBER, but that was not the case.
 * Currently the ROW_NUMBER is not being used and can be removed.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllPhoneMappings = async (req, res) => {
    let pool = await connectDB();
    let phoneMappings = await pool.request().query(`SELECT ROW_NUMBER() OVER (ORDER BY DepartmentID) 
        row_num, DepartmentID, Department, PhoneNumber FROM PhoneMapping`);
    res.status(StatusCodes.OK).json({phoneMappings: phoneMappings.recordset});
}

/**
 * Checks to see if the phone number exists, if not, will throw a NotFoundError.
 * Deletes the phone number from the associated department.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deletePhoneMapping = async (req, res) => {
    // Refactor to use NotFoundError
    const phoneNumber = req.params.phonenumber;
    let pool = await connectDB();

    // Need to check if Phone Number exists before deleting.
    const phone = await pool.request().query(`SELECT PhoneNumber FROM PhoneMapping WHERE PhoneNumber = '${phoneNumber}'`);

    if(phone.recordset.length === 0){
        throw new NotFoundError("Phone number not found!!");
    }

    await pool.request().query(`DELETE FROM PhoneMapping WHERE PhoneNumber = '${phoneNumber}'`);

    res.status(StatusCodes.OK).json({msg: `Deleted phone mapping associated with ${phoneNumber}`});
}

/**
 * Creates the phone mapping in the database.
 * Does a couple of checks.
 * 1. To see if the phone number already exists. If it does, it should not be used to create a new mapping.
 * 2. See if the department exists. If the department does not exist, it will need to be created first.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const createPhoneMapping = async (req, res) => {
    let pool = await connectDB();
    let phoneMapping = req.body;

    // Need to check if Phone Number already exists, if it does, do not create a new mapping.
    const phone = await pool.request().query(`SELECT PhoneNumber FROM PhoneMapping WHERE PhoneNumber = '${phoneMapping.PhoneNumber}'`);

    if(phone.recordset.length > 0){
        throw new BadRequestError("Phone number already exists!");
    }

    // Need to check if Department exists, if it does not, do not create a new mapping.
    const department = await pool.request().query(`Select DepartmentID, Department FROM Department WHERE DepartmentID = ${phoneMapping.DepartmentID}`);

    if(department.recordset.length === 0){
        throw new BadRequestError("Department does not exist! Create department first!");
    }

    const departmentName = department.recordset[0].Department;

    await pool.request().query(`INSERT INTO PhoneMapping VALUES (${phoneMapping.DepartmentID}, '${departmentName}', '${phoneMapping.PhoneNumber}')`);

    res.status(StatusCodes.CREATED).json(phoneMapping);

}

export { getAllPhoneMappings, deletePhoneMapping, createPhoneMapping }