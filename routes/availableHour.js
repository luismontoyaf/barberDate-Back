const express = require("express")
const router = express.Router();
const { validatorAvailableHour, validatorGetAvailableHour } = require("../validators/availableHour")
const customHeader = require("../middleware/customHeader")
const {createAvailableHours, getAvailableHours, updateAvailableHours} = require("../controllers/availableHour")



/**
 * Obtener detalle de horas por barbero
 */
router.get('/:id', validatorGetAvailableHour, getAvailableHours)

/**
 * Actualizar un barbero
 */
router.put('/:id', validatorAvailableHour, updateAvailableHours)

/**
 * Crea un registro
 */
router.post('/:id', validatorAvailableHour, createAvailableHours)

module.exports = router