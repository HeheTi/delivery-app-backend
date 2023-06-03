const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/orders');

router.post('/', controllers.postOrder);

module.exports = { ordersRouter: router };
