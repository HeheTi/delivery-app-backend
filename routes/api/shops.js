const express = require('express');
const router = express.Router();
const controller = require('../../controllers/shops');

router.get('/shops', controller.getAllShops);
router.get('/shop/:shopId', controller.getShopMenuById);

module.exports = { shopRouter: router };
