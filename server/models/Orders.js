const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  userId: {
    user: mongoose.Types.ObjectId,
  },
  totalQuantity: Number,
  totalPrice: Number,
  location: String,
  Shirts: {
    name: String,
    washtype: String,
    quantity: Number,
    totalPrice: Number,
  },
  Tshirts: {
    name: String,
    washtype: String,
    quantity: Number,
    totalPrice: Number,
  },
  Trousers: {
    name: String,
    washtype: String,
    quantity: Number,
    totalPrice: Number,
  },
  Jeans: {
    name: String,
    washtype: String,
    quantity: Number,
    totalPrice: Number,
  },
  Boxers: {
    name: String,
    washtype: String,
    quantity: Number,
    totalPrice: Number,
  },
  Joggers: {
    name: String,
    washtype: String,
    quantity: Number,
    totalPrice: Number,
  },
});

module.exports = mongoose.model("orders", ordersSchema);
