const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: '1', name: 'Big Big Burger', price: 888, amount: 4 },
    { id: '2', name: 'Buffet', price: 300, amount: 2 },
    { id: '3', name: 'Sweet', price: 888, amount: 4 },
  ]);
});

module.exports = { ordersRouter: router };
