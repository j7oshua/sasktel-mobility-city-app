import express from "express"
const router = express.Router()
import { getAllMonthlyBills, getMonthlyBillTotals } from "../controllers/monthlyBillController.js"

router.route("/bills").get(getAllMonthlyBills)
router.route("/billstotal").get(getMonthlyBillTotals)

export default router