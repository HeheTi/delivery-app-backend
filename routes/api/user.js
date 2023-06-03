const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/user');

router.get('/', controllers.getUserInfo);

module.exports = { userRouter: router };
