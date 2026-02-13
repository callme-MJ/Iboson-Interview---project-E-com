import { Router } from "express";
import { createOrder, getAllOders } from "../controllers/order.controller.js";


const router = Router()

router.get("/",getAllOders)
router.post("/",createOrder)

export default router