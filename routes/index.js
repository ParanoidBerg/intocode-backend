const { Router } = require("express");
const { model } = require("mongoose");
const router = Router();

router.use(require("./group.route"));
router.use(require("./payment.route"));
router.use(require("./student.route"));
router.use(require("./studentStatus.route"));
router.use(require("./week.route"));

module.exports = router;
