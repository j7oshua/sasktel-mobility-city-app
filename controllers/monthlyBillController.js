import connectDB from "../db/connect.js";
import { StatusCodes } from "http-status-codes";

const getAllMonthlyBills = async (req,res) => {
    try {
        let pool = await connectDB()
        let result1 = await pool.request().query("SELECT * FROM MonthlyBill")
        res.status(StatusCodes.OK).json({result1})
    } catch (err) {
        res.status(StatusCodes.BAD_REQUEST)
    }
}

const getMonthlyBillTotals = async (req,res) => {
    try {
        let pool = await connectDB()
        let monthlyBills = await pool.request().query("SELECT BillDate, ROUND(SUM(Total),2) FROM MonthlyBill GROUP BY BillDate")
        res.status(StatusCodes.OK).json({monthlyBills, totalMonthlyBills: monthlyBills.recordsets.length, numOfPages: 1})
    } catch (err) {
        res.status(StatusCodes.BAD_REQUEST)
    }
}

export { getAllMonthlyBills, getMonthlyBillTotals }

