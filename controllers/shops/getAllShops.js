const { Shop } = require('../../models/shop');
const { HttpError } = require('../../helpers');

const getAllShops = async (req, res) => {
  const shops = await Shop.find(_, '_id shop');
  if (!shops) {
    throw HttpError(404, `Shops not found`);
  }
  res.json(shops);
};

module.exports = getAllShops;
