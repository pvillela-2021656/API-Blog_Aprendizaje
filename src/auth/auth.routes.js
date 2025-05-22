import { Router } from "express"
import { loginValidator, registerValidator } from "../middlewares/user-validators.js"
import { login, register } from "./auth.controller.js"

const router = Router()
/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Operaciones de autenticación de usuarios
 *
 * /api/auth/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "usuario123"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "usuario@email.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "12345678"
 *           required:
 *             - username
 *             - email
 *             - password
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 uid:
 *                   type: string
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 *                 token:
 *                   type: string
 *       400:
 *         description: Error de validación o datos incompletos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Email already exists."
 *
 * /api/auth/login:
 *   post:
 *     summary: Iniciar sesión de usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "usuario@email.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "12345678"
 *           required:
 *             - email
 *             - password
 *     responses:
 *       200:
 *         description: Usuario autenticado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 uid:
 *                   type: string
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 *                 token:
 *                   type: string
 *       400:
 *         description: Credenciales inválidas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid credentials."
 *
 * # Validaciones y errores comunes:
 * # - username: requerido en registro
 * # - email: requerido, formato válido
 * # - password: requerido, mínimo 6 caracteres
 */
//

router.post(
    "/register",
    registerValidator,
    register
)

router.post(
    "/login",
    loginValidator,
    login
)

export default router