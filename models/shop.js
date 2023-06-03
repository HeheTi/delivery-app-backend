const { Schema, model } = require('mongoose');

const shopSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    shop: String,
    menu: {
      type: [
        {
          id: Schema.Types.ObjectId,
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
