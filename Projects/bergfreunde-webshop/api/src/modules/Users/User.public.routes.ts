import { Router } from "express";
import { authLocal } from "../../middleware/Auth/authMiddleware";
import { login, register } from "./User.controller";


const router = Router();
router.post("/login", authLocal, login);
router.post("/register", register);

export default router;