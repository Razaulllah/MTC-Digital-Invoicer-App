const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: Number },
  address: { type: String },
  clientName: { type: String },
  clientAddress: { type: String },
  clientPhone: { type: Number },
  invoiceNumber: { type: String },
  invoiceDate: { type: Date },
  notes: { type: String },
  total: { type: Number },
  date: {
    type: Date,
    default: Date.now,
  },
  list: [
    { description: String, quantity: Number, price: Number, amount: Number },
  ],
});

const UserModel = mongoose.model("invoice data", UserSchema);

module.exports = UserModel
