import { Router } from 'express';
import { createPublicationValidator, deletePublicationValidator, getPublicationsValidator, updatePublicationValidator } from '../middlewares/publication-validator.js';
import { createPublication, deletePublication, getPublications, updatePublication } from './publication.controller.js';
const router = Router();

router.post("/createPublication", createPublicationValidator, createPublication);

router.get("/getPublications", getPublicationsValidator, getPublications)

router.put("/updatePublication/:id", updatePublicationValidator, updatePublication);

router.delete("/deletePublication/:id", deletePublicationValidator, deletePublication);
export default router;