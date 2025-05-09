import { Router } from 'express';
import { createCommentaryValidator, deleteCommentaryValidator, getCommentariesValidator, updateCommentaryValidator } from '../middlewares/commentary-validator.js';
import { createCommentary, deleteCommentary, getCommentaries, updateCommentary } from './commentary.controller.js';
const router = Router();

router.post("/createCommentary", createCommentaryValidator, createCommentary);

router.get("/getCommentaries", getCommentariesValidator, getCommentaries);

router.put("/updateCommentary/:id", updateCommentaryValidator, updateCommentary);

router.delete("/deleteCommentary/:id", deleteCommentaryValidator, deleteCommentary);
export default router;