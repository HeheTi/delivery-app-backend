const { Schema, model } = require('mongoose');
const { mongooseHandleError } = require('../helpers');

const orderSchema = new Schema(
  {
    shop: {
      _id: Schema.Types.ObjectId,
      title: String,
    },
    time: {
      type: String,
      default: Date.now(),
    },
    totalPrice: Number,
    order: {
      type: [
        {
          title: String,
          price: Number,
          amount: {
            type: Number,
            min: 1,
            default: 1,
          },
        },
      ],
      default: [],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false },
);

orderSchema.post('save', mongooseHandleError);

const Order = model('order', orderSchema);

module.exports = { Order };
