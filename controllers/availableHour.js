const { matchedData } = require('express-validator');
const {availableHourModel} = require('../models');
const {handleHttpError}= require('../utils/handleError')

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getAvailableHours = async (req, res) => {

    try {
        const data = await availableHourModel.find({});

        res.send({data})   
    } catch (e) {
        handleHttpError(res, 'ERROR_EN_GET_AVAILABLE_HOURS')
    }
};

/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
const getHour = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await scheduleModel.findById(id);
        res.send({data});
    } catch (e) {
        handleHttpError(res, 'ERROR_EN_GET_HOUR')
    }
};*/

/**
 * Crear horas disponibles
 * @param {*} req 
 * @param {*} res 
 */
const createAvailableHours = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await availableHourModel.create(body)
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR_EN_CREATE_AVAILABLE_HOURS')
    }
};

/**
 * Actualizar horas disponibles
 * @param {*} req 
 * @param {*} res 
 */
const updateAvailableHours = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await availableHourModel.findOneAndUpdate(id);
        res.send({data});
    } catch (e) {
        handleHttpError(res, 'ERROR_EN_UPDATE_AVAILABLE_HOURS')
    }
};

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 
const deleteHour = (req, res) => {};
*/

module.exports = {getAvailableHours, createAvailableHours, updateAvailableHours};