const express = require("express")
const router = express.Router();
const { validatorCreateBarber, validatorGetBarber } = require("../validators/barbers")
const customHeader = require("../middleware/customHeader")
const { getBarbers, getBarber, createBarber, updateBarber, deleteBarber} = require("../controllers/barbers")

/**
 * Lista los barberos
 */
router.get('/', getBarbers)

/**
 * Obtener detalle de un barbero
 */
router.get('/:id', validatorGetBarber, getBarber)

/**
 * Crear un barbero
 */
router.post('/', validatorCreateBarber, createBarber)

/**
 * Actualizar un barbero
 */
router.put('/:id', validatorGetBarber, validatorCreateBarber, updateBarber)

/**
 * Eliminar un barbero
 */
router.delete('/:id', validatorGetBarber, deleteBarber)

module.exports = router