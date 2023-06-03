const { ctrlWrapper } = require('../../helpers');
const getUserByEmail = require('./getUserByEmail');

module.exports = {
  getUserByEmail: ctrlWrapper(getUserByEmail),
};
