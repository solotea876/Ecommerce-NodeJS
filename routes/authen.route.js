const express = require('express');

const router = express.Router();

const controller = require('../controller/authen.controller');
const validate = require('../validate/authen.validate');

router.get('/login', controller.login);
router.post('/login', validate.postLogin, controller.postLogin);
router.get('/signup', controller.signup);
router.post('/signup', validate.postSignUp, controller.postSignup);
router.get('/logout', controller.logOut);

module.exports = router;