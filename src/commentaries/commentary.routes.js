import { Router } from 'express';
import { createCommentaryValidator, deleteCommentaryValidator, getCommentariesValidator, updateCommentaryValidator } from '../middlewares/commentary-validator.js';
import { createCommentary, deleteCommentary, getCommentaries, updateCommentary } from './commentary.controller.js';
const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Commentaries
 *     description: Operaciones relacionadas con comentarios
 *
 * /api/commentary/createCommentary:
 *   post:
 *     summary: Crear un nuevo comentario
 *     tags: [Commentaries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               publicationId:
 *                 type: string
 *                 description: ID de la publicación a la que pertenece el comentario
 *                 example: "60d21b4667d0d8992e610c85"
 *               author:
 *                 type: string
 *                 description: Nombre del autor del comentario
 *                 example: "Juan Pérez"
 *               content:
 *                 type: string
 *                 description: Contenido del comentario
 *                 example: "Excelente explicación, gracias."
 *           required:
 *             - publicationId
 *             - author
 *             - content
 *     responses:
 *       201:
 *         description: Comentario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 uid:
 *                   type: string
 *                 publicationId:
 *                   type: string
 *                 author:
 *                   type: string
 *                 content:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Error de validación o datos incompletos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Content IS required."
 *
 * /api/commentary/getCommentaries:
 *   get:
 *     summary: Obtener todos los comentarios
 *     tags: [Commentaries]
 *     responses:
 *       200:
 *         description: Lista de comentarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   uid:
 *                     type: string
 *                   publicationId:
 *                     type: string
 *                   author:
 *                     type: string
 *                   content:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *
 * /api/commentary/updateCommentary/{id}:
 *   put:
 *     summary: Actualizar un comentario existente
 *     tags: [Commentaries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del comentario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: Nuevo contenido del comentario
 *                 example: "Comentario actualizado."
 *           required:
 *             - content
 *     responses:
 *       200:
 *         description: Comentario actualizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 uid:
 *                   type: string
 *                 publicationId:
 *                   type: string
 *                 author:
 *                   type: string
 *                 content:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Comentario no encontrado
 *
 * /api/commentary/deleteCommentary/{id}:
 *   delete:
 *     summary: Eliminar un comentario
 *     tags: [Commentaries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del comentario
 *     responses:
 *       200:
 *         description: Comentario eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Commentary deleted successfully."
 *       404:
 *         description: Comentario no encontrado
 *
 * # Validaciones y errores comunes:
 * # - publicationId: requerido, debe ser un ID válido de publicación
 * # - author: requerido
 * # - content: requerido
 */
//

router.post("/createCommentary", createCommentaryValidator, createCommentary);

router.get("/getCommentaries", getCommentariesValidator, getCommentaries);

router.put("/updateCommentary/:id", updateCommentaryValidator, updateCommentary);

router.delete("/deleteCommentary/:id", deleteCommentaryValidator, deleteCommentary);
export default router;