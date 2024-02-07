const {check} = require("express-validator");
const validateResults = require("../utils/handleValidator");

validatorCreateBarber = [
    check("name")
    .exists()
    .notEmpty(),
    check("lastName")
    .exists()
    .notEmpty(),
    check("documentType")
    .exists()
    .notEmpty(),
    check("documentNumber")
    .exists()
    .notEmpty(),
    check("age")
    .exists()
    .notEmpty()
    .isNumeric({min: 12, max:99}),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:8, max:15}),
    check("phone")
    .exists()
    .notEmpty(),
    check("role")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

validatorGetBarber = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

module.exports = { validatorCreateBarber, validatorGetBarber } 