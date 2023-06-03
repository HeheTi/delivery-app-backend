const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/shops');
const { isValidId } = require('../../middlewares');

router.get('/shops', controllers.getAllShops);
router.get('/shop/:shopId', isValidId, controllers.getShopMenuById);

module.exports = { shopRouter: router };
