import { body, param } from 'express-validator';
import { handleErrors } from './handle_errors.js';
import { validarCampos } from './validate-fields.js';

export const createCommentaryValidator = [
    //validateJWT,
    //hasRoles("ADMIN_ROLE"),
    body("author").notEmpty().withMessage("Author IS required."),
    body("content").notEmpty().withMessage("Commentary IS required."),
    body("publication").notEmpty().withMessage("Publication ID IS required."),
    validarCampos,
    handleErrors
]

export const getCommentariesValidator = [
    //validateJWT,
    //hasRoles("ADMIN_ROLE"),
    validarCampos,
    handleErrors
]

export const updateCommentaryValidator = [
    //validateJWT,
    //hasRoles("ADMIN_ROLE"),
    param("id").isMongoId().withMessage("The ID is not valid."),
    validarCampos,
    handleErrors
]

export const deleteCommentaryValidator = [
    //validateJWT,
    //hasRoles("ADMIN_ROLE"),
    param("id").isMongoId().withMessage("The ID is not valid."),
    validarCampos,
    handleErrors
]

