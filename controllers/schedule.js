const scheduledData = require("../data.json");

const getSchedule = async (req, res) => {
  res.status(200).json(scheduledData);
};

module.exports.get = getSchedule;
