const mongoose = require("mongoose");

const groupSchema = mongoose.Schema({
  name: Number,
  week: {
    ref: "Week",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Group = mongoose.model("Group", groupSchema);
module.exports = Group;
