const numbers = [
  406, 646, 199, 996, 989, 47, 55, 614, 293, 407, 287, 605, -56, 960, 832, 25, 596, 541, -577, 56, 878, 483, 681, 17,
  73, 428, -757, 923, 748, 619, 117, 588, -661, -267, 571, 95, 923, 386, 507, 243, -868, -797, 344, 660, 34, 945, -424,
  -169, 344, 601, 277, 478, 562, 863, 887, 172, 23, 995, 999, 2, 12, 476, 755, 617, 155, 698, 91, 1, 481, 971, 371, 164,
  220, 854, 590, 364, 446, 254, 980, 469, 738, 866, 297, 410, 407, 576, 893, 319, 866, 501, 939, 536, 380, 331, 438, 76,
  423, 951, 459, 425,
];

console.log("Hello");

// A list of all negative numbers, in ascending order, surrounded by [ and ], e.g. [ -4, -2, -1 ]
console.log(
  "List of negatives =",
  numbers.filter((number) => number < 0).sort((n1, n2) => n1 - n2),
);

// A single number that is the average of all positive numbers disivisble (without remainder) by 6, .e.g. 8.4
const positives = numbers.filter((number) => number > 0 && number % 6 == 0);
const sum = positives.reduce((prev, curr) => prev + curr);
console.log("Avergae of positive numbers and divisible by 6 =" + sum / positives.length);

// A list of all numbers great than 600, as they appear in the list, but printed in reverse order, e.g. [ 620, 610, 800 ]
console.log("Numbers greater than 600 but in reverse =", numbers.filter((number) => number > 600).reverse());
