const { Router } = require("express");
const { statusController } = require("../controllers/studentStatus.model");
const router = Router();

router.post("/student-status", statusController.postStatus);

module.exports = router;
