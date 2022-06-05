const Student = require("../models/student.model");

module.exports.studentController = {
  postStudent: async (req, res) => {
    try {
      Student.create({
        name: req.body.name,
        group: req.body.group,
        paymentStatus: req.body.paymentStatus,
        status: req.body.status,
      });
      res.json("создан");
    } catch (err) {
      res.json(err.message);
    }
  },
  getStudents: async (req, res) => {
    try {
      const data = await Student.find();
      res.json(data);
    } catch (err) {
      res.json(err.message);
    }
  },
  getStudentByGroup: async (req, res) => {
    try {
      const students = await Student.find({ group: req.params.id });
      res.json(students);
    } catch (err) {
      res.json(err.message);
    }
  },
  getStudentByPayment: async (req, res) => {
    try {
      const data = Student.find({ paymentStatus: req.params.id });
      res.json(data);
    } catch (err) {
      res.json(err.message);
    }
  },
  getStudentByStatus: async (req, res) => {
    try {
      const data = await Student.find({ status: req.params.id });
      res.json(data);
    } catch (err) {
      res.json(err.message);
    }
  },
  getStudentByOffer: async (req, res) => {
    try {
      const offer = await Student.find({ group: req.params.id }).find({
        status: "6299de3503da1a5803432988",
      });
      const group = await Student.find({ group: req.params.id });
      const result = (await (offer.length / group.length)) * 100;
      res.json(`${result}`);
    } catch (err) {
      res.json(err.message);
    }
  },
};
