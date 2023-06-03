const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/orders');

router.post('/', controllers.postOrder);
router.get('/history', controllers.getUserHistory);

module.exports = { ordersRouter: router };
