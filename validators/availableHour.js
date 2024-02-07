const {check} = require("express-validator");
const validateResults = require("../utils/handleValidator");

validatorAvailableHour = [
    check("range")
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
    check("availableHour")
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

validatorGetAvailableHour = [
    check("barberId")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

module.exports = { validatorAvailableHour, validatorGetAvailableHour } 