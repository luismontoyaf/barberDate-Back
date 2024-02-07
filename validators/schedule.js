const {check} = require("express-validator");
const validateResults = require("../utils/handleValidator");

validatorCreateHour = [
    check("barberName")
    .exists()
    .notEmpty(),
    check("hour")
    .exists()
    .notEmpty(),
    check("hour.start")
    .exists()
    .notEmpty(),
    check("hour.end")
    .exists()
    .notEmpty(),
    check("clientName")
    .exists()
    .notEmpty(),
    check("clientNumber")
    .exists()
    .notEmpty(),
    check("clientEmail")
    .exists()
    .notEmpty(),
    check("typeService")
    .exists()
    .notEmpty(),
    check("barberId")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

validatorGetHour = [
    check("barberId")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

module.exports = { validatorCreateHour, validatorGetHour } 