import "express-async-errors"
import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()

// DB
import connectDB from "./db/connect.js";

// Routers
import billRouter from "./routes/monthlyBillRoutes.js"

// middleware
import notFoundMiddleware from "./middleware/not-found.js"
import errorHandlerMiddleware from "./middleware/error-handler.js"

app.use(express.json())
app.use(express.urlencoded())

app.get('/api/v1',(req, res) => {
    res.json({msg: "API"})
})

app.use("/api/v1/monthly_bills", billRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000
const start = async () => {
    try {
        await connectDB()
        app.listen(port, ()=> {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()