const numbers = [
  406, 646, 199, 996, 989, 47, 55, 614, 293, 407, 287, 605, -56, 960, 832, 25, 596, 541, -577, 56, 878, 483, 681, 17,
  73, 428, -757, 923, 748, 619, 117, 588, -661, -267, 571, 95, 923, 386, 507, 243, -868, -797, 344, 660, 34, 945, -424,
  -169, 344, 601, 277, 478, 562, 863, 887, 172, 23, 995, 999, 2, 12, 476, 755, 617, 155, 698, 91, 1, 481, 971, 371, 164,
  220, 854, 590, 364, 446, 254, 980, 469, 738, 866, 297, 410, 407, 576, 893, 319, 866, 501, 939, 536, 380, 331, 438, 76,
  423, 951, 459, 425,
];

console.log("Hello");

let sum = 0;
let positiveSum = 0;
let evenSum = 0;
let sumAbove400 = 0;
let sumBetween20and40 = 0;

for (let i in numbers) {
  const number = numbers[i];

  // total sum
  sum += number;

  // check for positive numbers
  if (number > 0) {
    positiveSum += number;
  }

  // check for even numbers
  if (number % 2 == 0) {
    evenSum += number;
  }

  // check for values > 400
  if (number > 400) {
    sumAbove400 += number;
  }

  // check for index between 20 and 40
  if (i >= 20 && i <= 40) {
    sumBetween20and40 += number;
  }
}

console.log(`The sum of all numbers in that list ${sum}`);
console.log(`The sum of only positive numbers in that list ${positiveSum}`);
console.log(`The sum of only even numbers in that list ${evenSum}`);
console.log(`The sum of all numbers above 400 ${sumAbove400}`);
console.log(`The sum of numbers between array index 20 and 40 inclusively ${sumBetween20and40}`);
// The sum of all numbers in that list
// The sum of only positive numbers in that list
// The sum of only even numbers in that list
// The sum of all numbers above 400
// The sum of numbers between array index 20 and 40 inclusively
