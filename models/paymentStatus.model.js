const mongoose = require("mongoose");

const paySchema = mongoose.Schema({
  status: String,
});

const PaySt = mongoose.model("PaySt", paySchema);
module.exports = PaySt;
