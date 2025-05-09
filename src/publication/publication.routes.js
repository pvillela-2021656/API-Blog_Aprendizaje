import { Router } from 'express';
import { createPublicationValidator, deletePublicationValidator, getPublicationsByCourseWithCommentCountValidator, getPublicationsValidator, getRecentPublicationsValidator, updatePublicationValidator } from '../middlewares/publication-validator.js';
import { createPublication, deletePublication, getPublications, getPublicationsByCourseWithCommentCount, getRecentPublications, updatePublication } from './publication.controller.js';
const router = Router();

router.post("/createPublication", createPublicationValidator, createPublication);

router.post("/filterPublicationsByCourse", getPublicationsByCourseWithCommentCountValidator, getPublicationsByCourseWithCommentCount)

router.get("/getPublications", getPublicationsValidator, getPublications)

router.get("/getRecentPublications", getRecentPublicationsValidator, getRecentPublications)

router.put("/updatePublication/:id", updatePublicationValidator, updatePublication);

router.delete("/deletePublication/:id", deletePublicationValidator, deletePublication);
export default router;