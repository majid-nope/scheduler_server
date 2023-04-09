const moment = require("moment");

module.exports = (courses, time) => {
  return new Promise((resolve, reject) => {
    let startDate = moment(moment().format("YYYY-MM-DD"));
    let endDate = moment(startDate).add(1, "day");
    const groups = [];
    let currentGroup = [];
    let totalTime = 0;

    const userCommitHr = moment.duration(Number(time), "hour").asMinutes();

    console.log("==============================");
    courses.forEach((el) => {
      if (totalTime + el.duration > userCommitHr) {
        groups.push({
          topic: currentGroup,
        });
        currentGroup = [];
        totalTime = 0;
      }
      currentGroup.push(el);
      totalTime += el.duration;
    });

    if (currentGroup.length > 0) {
      groups.push({
        topic: currentGroup,
      });
    }

   
    let schedule = groups.map((el) => {
      console.log(endDate.toDate());
      endDate = endDate.add(1, "day");
      if (endDate.day() == 0) {
        endDate = endDate.add(1, "day");
      }
      startDate = endDate;
      return {
        date: endDate.toDate(),
        ...el,
      };
    });
    resolve(schedule);
  });
};
