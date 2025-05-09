import { hash, verify } from "argon2";
import jwt from "jsonwebtoken";
import { generateJWT } from "../helpers/generate-jwt.js";
import User from "../user/user.model.js";

export const register = async (req, res) => {
    try {
        const data = req.body;
        const encryptedPassword = await hash(data.password)
        data.password = encryptedPassword
        const user = await User.create(data);

        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            'SECRET_OR_PRIVATE_KEY',
            { expiresIn: '1h' }
        );


        return res.status(201).json({
            message: "User has been created",
            name: user.username,
            email: user.email,
            token: token
        });
    } catch (err) {
        return res.status(500).json({
            message: "User registration failed",
            error: err.message
        });
    }
}

export const login = async (req, res) => {
    const { email, username, password } = req.body
    try{
        const user = await User.findOne({
            $or:[{email: email}, {username: username}]
        })

        if(!user){
            return res.status(400).json({
                message: "Crendenciales inválidas",
                error:"No existe el usuario o correo ingresado"
            })
        }

        const validPassword = await verify(user.password, password)

        if(!validPassword){
            return res.status(400).json({
                message: "Crendenciales inválidas",
                error: "Contraseña incorrecta"
            })
        }

        const token = await generateJWT(user.id)

        return res.status(200).json({
            message: "Login successful",
            userDetails: {
                token: token,
                user: user.username
            }
        })
    }catch(err){
        return res.status(500).json({
            message: "Login failed, server error",
            error: err.message
        })
    }
}