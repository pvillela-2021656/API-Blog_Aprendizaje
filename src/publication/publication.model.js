/**
 * @swagger
 * components:
 *   schemas:
 *     Publication:
 *       type: object
 *       properties:
 *         uid:
 *           type: string
 *           description: ID único de la publicación.
 *           example: "60d21b4667d0d8992e610c85"
 *         title:
 *           type: string
 *           description: Título de la publicación.
 *           maxLength: 50
 *           example: "Introducción a BIM"
 *         description:
 *           type: string
 *           description: Descripción de la publicación.
 *           maxLength: 500
 *           example: "Esta publicación explica los conceptos básicos de BIM."
 *         course:
 *           type: string
 *           description: Curso al que pertenece la publicación.
 *           enum:
 *             - TALLER
 *             - TECNOLOGIA
 *             - PRACTICA
 *           example: "TALLER"
 *         dateOfCreation:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación de la publicación.
 *           example: "2024-05-21T15:30:00.000Z"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación (generada automáticamente por Mongoose).
 *           example: "2024-05-21T15:30:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de última actualización (generada automáticamente por Mongoose).
 *           example: "2024-05-21T15:30:00.000Z"
 *       required:
 *         - title
 *         - description
 *         - course
 *         - dateOfCreation
 */

import { Schema, model } from 'mongoose';

const publicationSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title IS required."],
        maxLength: [50, "Title cannot exceed 50 characters."]
    },
    description: {
        type: String,
        required: [true, "Description IS required."],
        maxLength: [500, "Description cannot exceed 500 characters."]
    },
    course: {
        type: String,
        required: [true, "Course of this publication IS required."],
        enum: ["TALLER", "TECNOLOGIA", "PRACTICA"]
    },
    dateOfCreation: {
        type: Date,
        required: [true, "Date of creation IS required."],
    }
}, {
    versionKey: false,
    timestamps: true
});

publicationSchema.methods.toJSON = function () {
    const { __v, _id, ...publication } = this.toObject();
    publication.uid = _id;
    return publication;
}

export default model("Publication", publicationSchema);