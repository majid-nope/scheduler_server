const moment = require('moment');

// define start date
let startDate = moment('2023-04-10');

// define array of hours
const hoursArray = [4, 4, 4, 4, 4];

// loop through array
hoursArray.forEach(hours => {
  // add 6 units (i.e., 4 hours) to start date
  let endDate = moment(startDate).add(25, "hour");
  
  // check if end date falls on a Sunday
  if (endDate.day() === 0) {
    endDate = endDate.add(1, 'day'); // add an extra day to skip Sunday
  }
  
  console.log(endDate.format("YYYY-MM-DD")); // print the end date in the desired format
  
  // update start date for next iteration
  startDate = endDate;
});
