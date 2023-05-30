import express from "express"
const router = express.Router()
import { getAllMonthlyBills, getMonthlyBillTotals } from "../controllers/monthlyBillController.js"

// Current routes for viewing the monthly bills.
router.route("/bills").get(getAllMonthlyBills)
router.route("/billstotal").get(getMonthlyBillTotals)

export default router