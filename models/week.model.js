const mongoose = require("mongoose");

const weekSchema = mongoose.Schema({
  week: Number,
});

const Week = mongoose.model("Week", weekSchema);
module.exports = Week;
