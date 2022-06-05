const { Router } = require("express");
const { studentController } = require("../controllers/student.controller");
const router = Router();

router.post("/students", studentController.postStudent);
router.get("/students", studentController.getStudents);
router.get("/students/groups/:id", studentController.getStudentByGroup);
router.get("/students/offers/:id", studentController.getStudentByOffer);
router.get("/students/payment/:id", studentController.getStudentByPayment);
router.get("/students/status/:id", studentController.getStudentByStatus);

module.exports = router;
