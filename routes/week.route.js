const { Router } = require("express");
const { weekController } = require("../controllers/week.controller");
const router = Router();

router.post("/weeks", weekController.postWeek);

module.exports = router;
