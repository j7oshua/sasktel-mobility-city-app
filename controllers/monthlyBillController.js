import connectDB from "../db/connect.js";
import { StatusCodes } from "http-status-codes";

/***
 * Retrieves ALL the monthly bills from the database.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllMonthlyBills = async (req,res) => {
    let pool = await connectDB();
    let monthlyBill = await pool.request().query("SELECT * FROM MonthlyBill ORDER BY DepartmentID");
    res.status(StatusCodes.OK).json({monthlyBill: monthlyBill.recordset});
}

/***
 * Retrieves the total amount for each bill month, along with the total months and the number of pages. The number of
 * pages feature is currently NOT created yet. This will be a future feature.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getMonthlyBillTotals = async (req,res) => {
    let pool = await connectDB();
    let monthlyBills = await pool.request().query(`SELECT BillDate, ROUND(SUM(Total),2) AS 'Total' FROM MonthlyBill GROUP BY BillDate`);
    res.status(StatusCodes.OK).json({monthlyBills: monthlyBills.recordset, totalMonthlyBills: monthlyBills.recordsets.length, numOfPages: 1});
}

export { getAllMonthlyBills, getMonthlyBillTotals }

