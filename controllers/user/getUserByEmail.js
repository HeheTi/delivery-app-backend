const { User } = require('../../models/user');
const { HttpError } = require('../../helpers');

const getUserByEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(404, `User with ${email} not found`);
  }
  res.json(user);
};

module.exports = getUserByEmail;
