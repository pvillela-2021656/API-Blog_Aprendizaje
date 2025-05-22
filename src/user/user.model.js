import { Schema, model } from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         uid:
 *           type: string
 *           description: ID único del usuario.
 *           example: "665e1c2f7b2e4a0012a4b999"
 *         name:
 *           type: string
 *           description: Nombre del usuario.
 *           maxLength: 25
 *           example: "Juan"
 *         surname:
 *           type: string
 *           description: Apellido del usuario.
 *           maxLength: 25
 *           example: "Pérez"
 *         username:
 *           type: string
 *           description: Nombre de usuario único.
 *           example: "juanperez"
 *         email:
 *           type: string
 *           format: email
 *           description: Correo electrónico único.
 *           example: "juan@email.com"
 *         role:
 *           type: string
 *           description: Rol del usuario.
 *           enum: [ADMIN_ROLE, VISITOR_ROLE]
 *           example: "VISITOR_ROLE"
 *         status:
 *           type: boolean
 *           description: Estado del usuario (activo/inactivo).
 *           example: true
 *       required:
 *         - name
 *         - surname
 *         - username
 *         - email
 *         - password
 *         - role
 */
//

const userSchema = new Schema({
    name:{
        type: String,
        required: [true, "Name IS required."],
        maxLength: [25, "Name cannot exceed 25 characteres."]
    },
    surname:{
        type: String,
        required: [true, "Surname IS required."],
        maxLength: [25, "Surname cannot exceed 25 characteres."]
    },
    username:{
        type: String,
        required: [true, "username IS required."],
        unique: true
    },
    email:{
        type: String,
        required: [true, "Email IS required."],
        unique: true,
    },
    password:{
        type: String,
        required: [true, "Password IS required."],
    },
    role:{
        type: String,
        required: true,
        enum: ["ADMIN_ROLE", "VISITOR_ROLE"],
        default: "VISITOR_ROLE"
    },
    status:{
        type: Boolean,
        default: true,
    },
},
    {
        versionKey: false,
        timeStamps: true
    });

userSchema.methods.toJSON = function (){
    const { __v, password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
}

export default model("User", userSchema);