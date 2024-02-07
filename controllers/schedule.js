const { matchedData } = require('express-validator');
const {scheduleModel} = require('../models');
const {handleHttpError}= require('../utils/handleError')

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getHours = async (req, res) => {

    try {
        const data = await scheduleModel.find({});

        res.send({data})   
    } catch (e) {
        handleHttpError(res, 'ERROR_EN_GET_ITEMS')
    }
};

/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getHour = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await scheduleModel.findById(id);
        res.send({data});
    } catch (e) {
        handleHttpError(res, 'ERROR_EN_GET_HOUR')
    }
};

/**
 * Crear un registro
 * @param {*} req 
 * @param {*} res 
 */
const createHour = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await scheduleModel.create(body)
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR_EN_CREATE_ITEMS')
    }
};

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateHour = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await scheduleModel.findOneAndUpdate(id);
        res.send({data});
    } catch (e) {
        handleHttpError(res, 'ERROR_EN_GET_HOUR')
    }
};

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteHour = (req, res) => {};

module.exports = {getHours, getHour, createHour, updateHour, deleteHour};