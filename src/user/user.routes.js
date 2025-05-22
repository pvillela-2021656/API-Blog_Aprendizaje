import { Router } from "express";
import { currentUser } from "./user.controller.js";
const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operaciones relacionadas con usuarios
 *
 * /api/user/currentUser:
 *   get:
 *     summary: Obtener información del usuario autenticado
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Información del usuario autenticado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: No autorizado o token inválido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized"
 */
//
router.get("/currentUser", currentUser);

export default router;