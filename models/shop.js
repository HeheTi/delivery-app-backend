const { Schema, model } = require('mongoose');

const shopSchema = new Schema(
  {
    shop: String,
    menu: {
      type: [
        {
          title: String,
          price: String,
        },
      ],
      default: [],
    },
  },
  { versionKey: false },
);

const Shop = model('shop', shopSchema);

module.exports = { Shop };
