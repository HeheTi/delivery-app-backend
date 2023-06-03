const { User } = require('../models/user');

const getUser = async email => {
  const user = await User.findOne({ email });
  return user;
};

const saveNewUser = async userData => await User.create(userData);

module.exports = { getUser, saveNewUser };
