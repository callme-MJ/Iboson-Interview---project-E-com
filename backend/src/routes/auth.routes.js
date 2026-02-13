import { Router } from "express";
import {  loginUser, register } from "../controllers/auth.controller.js";


const router = Router()

router.post("/login",loginUser)

router.post("/register",register)

export default router