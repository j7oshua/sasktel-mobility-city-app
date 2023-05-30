import dotenv from "dotenv";
dotenv.config();
import sql from "mssql";

// The configuration settings for the database.
const config = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    domain: process.env.DOMAIN,
    database: process.env.DATABASE,
    options: {
        trustServerCertificate: true
    }
};

const connectDB = () => {
    return sql.connect(config);
}

export default connectDB;

