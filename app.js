require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { shopRouter } = require('./routes/api/shops');
const { ordersRouter } = require('./routes/api/orders');
const { userRouter } = require('./routes/api/user');
const { errorHandler } = require('./helpers');

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(morgan(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api', shopRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/user', userRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use(errorHandler);

module.exports = app;
