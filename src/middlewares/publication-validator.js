import { body, param } from 'express-validator';
import { handleErrors } from './handle_errors.js';
import { validarCampos } from './validate-fields.js';
import { validateJWT } from './validate-jwt.js';
import { hasRoles } from './validate-roles.js';

export const createPublicationValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    body("title").notEmpty().withMessage("Title IS required."),
    body("description").notEmpty().withMessage("Description IS required."),
    body("course").notEmpty().withMessage("Course IS required."),
    body("dateOfCreation").notEmpty().withMessage("Date of creation IS required."),
    validarCampos,
    handleErrors
]

export const getPublicationsValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    validarCampos,
    handleErrors
]

export const updatePublicationValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    param("id").isMongoId().withMessage("The ID is not valid."),
    validarCampos,
    handleErrors
]

export const deletePublicationValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    param("id").isMongoId().withMessage("The ID is not valid."),
    validarCampos,
    handleErrors
]

export const getPublicationsByCourseWithCommentCountValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE", "VISITOR_ROLE"),
    body("course").notEmpty().withMessage("Course IS required.").isIn(["TALLER", "TECNOLOGIA", "PRACTICA"]).withMessage("Invalid course value."),
    validarCampos,
    handleErrors
];

export const getRecentPublicationsValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE", "VISITOR_ROLE"),
    validarCampos,
    handleErrors
];