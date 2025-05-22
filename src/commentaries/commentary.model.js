import { Schema, model } from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     Commentary:
 *       type: object
 *       properties:
 *         uid:
 *           type: string
 *           description: ID único del comentario.
 *           example: "665e1c2f7b2e4a0012a4b123"
 *         author:
 *           type: string
 *           description: ID del usuario autor del comentario.
 *           example: "665e1c2f7b2e4a0012a4b111"
 *         content:
 *           type: string
 *           description: Contenido del comentario.
 *           maxLength: 300
 *           example: "Excelente explicación, gracias."
 *         dateOfComment:
 *           type: string
 *           format: date-time
 *           description: Fecha del comentario.
 *           example: "2024-05-22T10:00:00.000Z"
 *         publication:
 *           type: string
 *           description: ID de la publicación asociada.
 *           example: "665e1c2f7b2e4a0012a4b222"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación (generada automáticamente).
 *           example: "2024-05-22T10:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de última actualización (generada automáticamente).
 *           example: "2024-05-22T10:00:00.000Z"
 *       required:
 *         - author
 *         - content
 *         - publication
 *         - dateOfComment
 */
//

const commentarySchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Author's name IS required."]
    },
    content: {
        type: String,
        required: [true, "Comment content IS required."],
        maxLength: [300, "Comment cannot exceed 300 characters."]
    },
    dateOfComment: {
        type: Date,
        default: Date.now,
        required: true
    },
    publication: {
        type: Schema.Types.ObjectId,
        ref: 'Publication',
        required: [true, "Associated publication ID IS required."]
    }
}, {
    versionKey: false,
    timestamps: true
});

commentarySchema.methods.toJSON = function () {
    const { __v, _id, ...comment } = this.toObject();
    comment.uid = _id;
    return comment;
}

export default model("Comment", commentarySchema);
