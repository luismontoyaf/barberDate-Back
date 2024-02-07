const express = require("express")
const router = express.Router();
const { validatorCreateHour, validatorGetHour } = require("../validators/schedule")
const authMiddleware = require("../middleware/session")
const {getHours, getHour, createHour, deleteHour} = require("../controllers/schedule")

/**
 * Lista los items
 */
router.get('/', authMiddleware ,getHours)

/**
 * Obtener detalle de horas
 */
router.get('/:id', validatorGetHour, getHour)

/**
 * Eliminar horas
 */
router.delete('/:id', deleteHour)

/**
 * Crea un registro
 */
router.post('/', validatorCreateHour, createHour)

module.exports = router