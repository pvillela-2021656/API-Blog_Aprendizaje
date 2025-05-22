import { Router } from 'express';
import { createPublicationValidator, deletePublicationValidator, getPublicationsByCourseWithCommentCountValidator, getPublicationsValidator, getRecentPublicationsValidator, updatePublicationValidator } from '../middlewares/publication-validator.js';
import { createPublication, deletePublication, getPublications, getPublicationsByCourseWithCommentCount, getRecentPublications, updatePublication } from './publication.controller.js';
const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Publications
 *     description: Operaciones relacionadas con publicaciones
 *
 * /api/publication/createPublication:
 *   post:
 *     summary: Crear una nueva publicación
 *     tags: [Publications]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Publication'
 *           example:
 *             title: "Introducción a BIM"
 *             description: "Esta publicación explica los conceptos básicos de BIM."
 *             course: "TALLER"
 *             dateOfCreation: "2024-05-21T15:30:00.000Z"
 *     responses:
 *       201:
 *         description: Publicación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Publication'
 *       400:
 *         description: Error de validación o datos incompletos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Title IS required."
 *
 * /api/publication/filterPublicationsByCourse:
 *   post:
 *     summary: Obtener publicaciones filtradas por curso con conteo de comentarios
 *     tags: [Publications]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               course:
 *                 type: string
 *                 enum: [TALLER, TECNOLOGIA, PRACTICA]
 *                 example: "TALLER"
 *     responses:
 *       200:
 *         description: Lista de publicaciones filtradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Publication'
 *       400:
 *         description: Curso inválido
 *
 * /api/publication/getPublications:
 *   get:
 *     summary: Obtener todas las publicaciones
 *     tags: [Publications]
 *     responses:
 *       200:
 *         description: Lista de publicaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Publication'
 *
 * /api/publication/getRecentPublications:
 *   get:
 *     summary: Obtener publicaciones recientes
 *     tags: [Publications]
 *     responses:
 *       200:
 *         description: Lista de publicaciones recientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Publication'
 *
 * /api/publication/updatePublication/{id}:
 *   put:
 *     summary: Actualizar una publicación existente
 *     tags: [Publications]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la publicación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Publication'
 *           example:
 *             title: "Nuevo título"
 *             description: "Nueva descripción"
 *             course: "PRACTICA"
 *             dateOfCreation: "2024-05-21T15:30:00.000Z"
 *     responses:
 *       200:
 *         description: Publicación actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Publication'
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Publicación no encontrada
 *
 * /api/publication/deletePublication/{id}:
 *   delete:
 *     summary: Eliminar una publicación
 *     tags: [Publications]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la publicación
 *     responses:
 *       200:
 *         description: Publicación eliminada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Publication deleted successfully."
 *       404:
 *         description: Publicación no encontrada
 *
 * # Validaciones y errores comunes:
 * # - title: requerido, máximo 50 caracteres
 * # - description: requerido, máximo 500 caracteres
 * # - course: requerido, debe ser uno de TALLER, TECNOLOGIA, PRACTICA
 * # - dateOfCreation: requerido, formato date-time
 */
// ...existing code...


router.post("/createPublication", createPublicationValidator, createPublication);

router.post("/filterPublicationsByCourse", getPublicationsByCourseWithCommentCountValidator, getPublicationsByCourseWithCommentCount)

router.get("/getPublications", getPublicationsValidator, getPublications)

router.get("/getRecentPublications", getRecentPublicationsValidator, getRecentPublications)

router.put("/updatePublication/:id", updatePublicationValidator, updatePublication);

router.delete("/deletePublication/:id", deletePublicationValidator, deletePublication);
export default router;