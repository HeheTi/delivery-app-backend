const { HttpError } = require('../../helpers');
const { getShops } = require('../../services/shopsServices');

const getAllShops = async (req, res) => {
  const shops = await getShops();
  if (!shops) {
    throw HttpError(404, `Shops not found`);
  }
  res.json(shops);
};

module.exports = getAllShops;
