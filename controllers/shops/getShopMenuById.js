const { HttpError } = require('../../helpers');
const { getShop } = require('../../services/shopsServices');

const getShopMenuById = async (req, res) => {
  const { id } = req.params;
  const shop = await getShop(id);
  if (!shop) {
    throw HttpError(404, 'There is no store with this id');
  }
  res.json(shop.menu);
};

module.exports = getShopMenuById;
