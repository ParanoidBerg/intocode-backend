const Week = require("../models/week.model");

module.exports.weekController = {
  postWeek: async (req, res) => {
    try {
      Week.create({
        week: req.body.week,
      });
      res.json("создано");
    } catch (err) {
      res.json(err.message);
    }
  },
};
