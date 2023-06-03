const { User } = require('../models/user');

const getUser = async dataForSearch => {
  const user = await User.findOne({ ...dataForSearch });
  return user;
};

const saveNewUser = async userData => await User.create(userData);

module.exports = { getUser, saveNewUser };
