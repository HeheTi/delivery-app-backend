const { ctrlWrapper } = require('../../helpers');
const postOrder = require('./postOrder');
const getUserHistory = require('./getUserHistory');

module.exports = {
  postOrder: ctrlWrapper(postOrder),
  getUserHistory: ctrlWrapper(getUserHistory),
};
