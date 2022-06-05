const Status = require("../models/studentStatus.model");

module.exports.statusController = {
  postStatus: async (req, res) => {
    try {
      await Status.create({
        status: req.body.status,
      });
      res.json("создано");
    } catch (err) {
      res.json(err.message);
    }
  },
};
