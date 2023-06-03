const postOrder = require('./postOrder');
const { ctrlWrapper } = require('../../helpers');

module.exports = { postOrder: ctrlWrapper(postOrder) };
