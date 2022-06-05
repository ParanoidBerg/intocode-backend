const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: String,
  group: {
    ref: "Group",
    type: mongoose.SchemaTypes.ObjectId,
  },
  paymentStatus: {
    ref: "PaySt",
    type: mongoose.SchemaTypes.ObjectId,
  },
  status: {
    ref: "Status",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
