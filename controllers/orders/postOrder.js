const { isValidObjectId } = require('mongoose');
const { HttpError } = require('../../helpers');
const { saveOrder } = require('../../services/ordersServices');
const { getUser, saveNewUser } = require('../../services/usersServices');

const postOrder = async (req, res) => {
  const { userInfo, shop, totalPrice, order } = req.body;

  if (!userInfo?.email) {
    throw HttpError(400, 'Missing email');
  }

  if (!isValidObjectId(shop)) {
    throw HttpError(404, `${shop} not valid id format`);
  }

  const isHaveUser = await getUser(userInfo.email);

  if (!isHaveUser) {
    await saveNewUser(userInfo);
  }

  const user = await getUser(userInfo.email);

  const newOrder = await saveOrder({
    owner: user._id,
    order,
    totalPrice,
    shop,
  });

  res.status(201).json(newOrder);
};

module.exports = postOrder;
