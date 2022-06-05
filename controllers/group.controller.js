const Group = require("../models/group.model");

module.exports.groupController = {
  postGroup: async (req, res) => {
    try {
      await Group.create({
        name: req.body.name,
        week: req.body.week,
      });
      res.json("создано");
    } catch (err) {
      res.json(err.message);
    }
  },
  getGroupByWeek: async (req, res) => {
    try {
      const data = await Group.findById({ week: req.params.id });
      res.json(data);
    } catch (err) {
      res.json(err.message);
    }
  },
  getGropByStatus: async (req, res) => {
    try {
      const data = await Group.findById({ week: { $gt: 16 } });
      res.json(data);
    } catch (err) {
      res.json(err.message);
    }
  },
};
