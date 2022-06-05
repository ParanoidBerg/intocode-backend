const { model } = require("mongoose");
const PaySt = require("../models/paymentStatus.model");

module.exports.paymentController = {
  postPay: async (req, res) => {
    try {
      PaySt.create({
        status: req.body.status,
      });
      res.json("создано");
    } catch (err) {
      res.json(err.message);
    }
  },
};
