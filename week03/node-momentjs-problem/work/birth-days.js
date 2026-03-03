console.log("hi");

curr = require("moment")();

for (let i = 0; i < 14; i++) {
  // get day of current date
  console.log(curr.format("dddd"));
  // modify curr to mode date to the previous year
  curr = curr.subtract(1, "year");
}
