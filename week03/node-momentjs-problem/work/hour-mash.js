console.log("hi");

// The day started [5] hours ago.
// One week ago it was exactly [Wednesday] at [3:33 PM].
// Today's date is [18/09/2020].
// There are exactly [44949] seconds until 9am on Friday.

const moment = require("moment");

const hour = moment().format("HH"); // get hours
const day = moment().subtract(7, "days").format("dddd"); // get day
const time = moment().format("LT"); // get time
const getDate = moment().format("DD/MM/YYYY"); // get todays date
const getSecs = Math.floor(moment().day(5).startOf("day").add(9, "hours").diff(moment()) / 1000); // secs to fri 9am

console.log(
  `The day started [${hour}] hours ago. One week ago it was exactly [${day}] at [${time}]. Today's date is [${getDate}]. There are exactly [${getSecs}] seconds until 9am on Friday.`,
);
