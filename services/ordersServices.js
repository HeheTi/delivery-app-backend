const { Order } = require('../models/order');

const saveOrder = async orderData => {
  const order = await Order.create(orderData);
  return order;
};

const getHistory = async id => {
  const history = await Order.find({ owner: id });
  return history;
};

module.exports = { saveOrder, getHistory };
