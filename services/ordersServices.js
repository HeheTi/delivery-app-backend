const { Order } = require('../models/order');

const saveOrder = async orderData => {
  const order = await Order.create(orderData);
  return order;
};

module.exports = { saveOrder };
