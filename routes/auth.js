const express = require("express")
const router = express.Router();
const {validatorRegister, validatorLogin} = require("../validators/auth");
const {loginController, registerController} = require("../controllers/auth")


/**
 * Crea un registro
 */
router.post('/register', validatorRegister, registerController);

router.post('/login', validatorLogin, loginController);

module.exports = router