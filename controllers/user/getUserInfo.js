const { HttpError } = require('../../helpers');
const { getUser } = require('../../services/usersServices');

const getUserInfo = async (req, res) => {
  const { email } = req.body;
  const user = await getUser(email);

  if (!user) {
    throw HttpError(404, `User with ${email} not found`);
  }

  res.json(user);
};

module.exports = getUserInfo;
