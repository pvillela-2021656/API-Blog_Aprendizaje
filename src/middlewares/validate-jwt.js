import jwt from "jsonwebtoken"
import User from "../user/user.model.js"

export const validateJWT = async (req, res, next) => {
    try {
        let token = req.body.token || req.query.token || req.headers["authorization"]

        if (!token) {
            return res.status(400).json({
                success: false,
                message: "There is no token in this request."
            })
        }

        token = token.replace(/^Bearer\s+/, "")

        const { uid } = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY)

        const user = await User.findById(uid)

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "No User in the DataBase."
            })
        }

        if (user.status === false) {
            return res.status(400).json({
                success: false,
                message: " User has already been deactivated."
            })
        }

        req.user = user
        next()
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error validating the token.",
            error: err.message
        })
    }
}