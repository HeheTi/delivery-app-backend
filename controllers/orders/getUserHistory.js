const { HttpError } = require('../../helpers');
const { getHistory } = require('../../services/ordersServices');
const { getUser } = require('../../services/usersServices');

const getUserHistory = async (req, res) => {
  const { email, phone } = req.body;

  const user = await getUser({ email, phone });

  if (!user) {
    throw HttpError(
      404,
      `User with email: ${email} and number: ${phone} not found`,
    );
  }

  const history = (await getHistory(user._id)) || [];
  res.json(history);
};

module.exports = getUserHistory;
