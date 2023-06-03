const { Shop } = require('../models/shop');

const getShops = async () => {
  const shops = await Shop.find(null, '_id shop');
  return shops;
};

const getShop = async id => {
  const shop = await Shop.findById(id);
  return shop;
};

module.exports = {
  getShops,
  getShop,
};
