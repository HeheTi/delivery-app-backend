const { Shop } = require('../../models/shop');
const { HttpError } = require('../../helpers');

const getShopMenuById = async (req, res) => {
  const { shopId } = req.params;
  const shop = await Shop.findById(shopId);
  if (!shop) {
    throw HttpError(404, 'There is no store with this id');
  }
  res.json(shop.menu);
};

module.exports = getShopMenuById;
