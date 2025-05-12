import { Router } from "express";
import { currentUser } from "./user.controller.js";
const router = Router();

router.get("/currentUser", currentUser);

export default router;