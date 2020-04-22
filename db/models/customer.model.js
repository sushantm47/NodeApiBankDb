const { Schema, model } = require("mongoose");

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 9,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  balance: {
    type: Number,
    default: 500,
  },
});

const Customer = model("Customer", customerSchema);

module.exports = {
  Customer,
};
