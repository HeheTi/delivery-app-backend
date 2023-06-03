const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { mongooseHandleError } = require('../helpers');

const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      default: 'User',
    },
    email: {
      type: String,
      match: emailRegex,
      require: [true, 'Email is required'],
      unique: true,
    },
    phone: {
      type: String,
      require: [true, 'Phone number is required'],
    },
    address: {
      type: String,
      require: [true, 'Address is required'],
    },
  },
  { versionKey: false },
);

userSchema.post('save', mongooseHandleError);

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required(),
});

const userNameSchema = Joi.object({
  name: Joi.string().min(1).max(30),
});

const schemas = {
  emailSchema,
  userNameSchema,
};

const User = model('user', userSchema);

module.exports = { User, schemas };
