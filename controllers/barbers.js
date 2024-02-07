const { matchedData } = require('express-validator');
const {barbersModel} = require('../models');
const {handleHttpError}= require('../utils/handleError')

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getBarbers = async (req, res) => {

    try {
        const data = await barbersModel.find({});

        res.send({data})   
    } catch (e) {
        handleHttpError(res, 'ERROR_EN_GET_BARBERS')
    }
};

/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getBarber = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await barbersModel.findById(id);
        res.send({data});
    } catch (e) {
        handleHttpError(res, 'ERROR_EN_GET_BARBER')
    }
};

/**
 * Crear un registro
 * @param {*} req 
 * @param {*} res 
 */
const createBarber = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await barbersModel.create(body)
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR_EN_CREATE_BARBER')
    }
};

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateBarber = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req)
        const data = await barbersModel.findOneAndUpdate(
            id, body
        );
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR_EN_UPDATE_BARBER')
    }
};

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteBarber = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await barbersModel.deleteOne({_id:id});
        res.send({data});
    } catch (e) {
        handleHttpError(res, 'ERROR_EN_DELETE_BARBER')
    }
};

module.exports = {getBarbers, getBarber, createBarber, updateBarber, deleteBarber};