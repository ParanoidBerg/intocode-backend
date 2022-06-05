const { Router } = require("express");
const { groupController } = require("../controllers/group.controller");
const router = Router();

router.post("/groups", groupController.postGroup);
router.get("/groups/status/:id", groupController.getGropByStatus);
router.get("/groups/week/:id", groupController.getGroupByWeek);

module.exports = router;
