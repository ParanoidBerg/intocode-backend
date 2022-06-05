const { Router } = require("express");
const {
  paymentController,
} = require("../controllers/paymentStatus.controller");
const router = Router();

router.post("/payment", paymentController.postPay);

module.exports = router;
