import connectDB from "../db/connect.js";
import { StatusCodes } from "http-status-codes";
import {BadRequestError, NotFoundError} from "../errors/index.js";

/**
 * Makes the call to the database to retrieve all the departments.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllDepartments = async (req, res) => {
    let pool = await connectDB();
    let departments = await pool.request().query(`SELECT * FROM Department ORDER BY DepartmentID`);
    res.status(StatusCodes.OK).json({departments: departments.recordset});
}

/**
 * Checks to see if the department exists. If the department does exist, it will delete that department from the database.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deleteDepartment = async (req, res) => {

    const id = req.params.id;
    let pool = await connectDB();

    // Need to check if department exists before deleting.
    const department = await pool.request().query(`SELECT DepartmentID FROM Department WHERE DepartmentID = ${id}`);

    if(department.recordset.length === 0){
        throw new NotFoundError("Department not found!!");
    }

    await pool.request().query(`DELETE FROM Department WHERE DepartmentID = ${id}`);
    res.status(StatusCodes.OK).json({msg: `Deleted department ${id}`});
}

/**
 * Checks to see if there are any missing values from the request. If the values are there, it will create the department.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const createDepartment = async (req, res) => {
    let pool = await connectDB();
    let department = req.body;
    if(!department.DepartmentID || !department.Department){
        throw new BadRequestError("Missing value to create department!");
    }
    await pool.request().query(`INSERT INTO Department VALUES (${department.DepartmentID}, '${department.Department}')`);
    res.status(StatusCodes.OK).json(department);
}

export { getAllDepartments, deleteDepartment, createDepartment }