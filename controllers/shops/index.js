const { ctrlWrapper } = require('../../helpers');
const getAllShops = require('./getAllShops');
const getShopMenuById = require('./getShopMenuById');

module.exports = {
  getAllShops: ctrlWrapper(getAllShops),
  getShopMenuById: ctrlWrapper(getShopMenuById),
};
