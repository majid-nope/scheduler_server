const coursesData = require("../course.json");
const fs = require("fs/promises");
const schedule = require("../utils/shedule");
const makeSchedule = async (req, res) => {
  let scheduledData = await schedule(coursesData, req.body.time);

  

  await fs.writeFile(
    `${process.cwd()}/data.json`,
    JSON.stringify(scheduledData)
  );
  res.status(200).json("done");
};

module.exports = makeSchedule;
