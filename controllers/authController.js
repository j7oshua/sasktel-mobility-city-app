import connectDB from "../db/connect.js";
import { StatusCodes } from "http-status-codes";
const register = async (req, res) => {
    try {
        let pool = await connectDB();
        let request = await req.body;
        let result1 = await pool.request().query(`INSERT INTO Employee VALUES
        ('${request.empName}', '${request.email}', '${request.empPassword}')`);
        res.status(StatusCodes.OK).json({msg:'Employee created!'})
    } catch (err) {
        res.status(StatusCodes.BAD_REQUEST)
    }
}
const login = async (req, res) => {
    res.send('login');
}
const updateUser = async (req, res) => {
    res.send('update user');
}

export {register, login, updateUser}