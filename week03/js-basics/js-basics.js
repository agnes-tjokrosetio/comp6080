// Variables ===================================================================

let name = "Alice"; // can change this later
const age = 95; // cant change

var school = "UNSW";

// Printing ====================================================================

console.log("hellow world");

let user = "Ally";
console.log(`hello ${user}`);
console.log(user);

// Conditionals ================================================================

let cost = 16;

if (cost >= 18) {
  console.log("expensive");
} else if (cost >= 10) {
  console.log("medium");
} else {
  // do smth here
}

// Arrays ======================================================================

let fruits = ["apple", "banana", "orange"];

let banana = fruits[1];
fruits.push("watermelon");

fruits.pop();

// Loops =======================================================================

// while loops
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// for loops
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let i in fruits) {
  // access the index of elements
  console.log(i);
}

for (let fruit of fruits) {
  // accessing value of elements
  console.log(fruit);
}

// Objects =====================================================================

let person = {
  name: "Alice",
  age: 20,
  city: "Sydney",
};

let alice = person.name;

person.job = "Student";
console.log(person);

// Functions ===================================================================

function greet(name) {
  console.log("hello " + name);
}
greet("Bob");

const multiple = (a, b) => {
  return a * b;
};
console.log(multiple(4, 5));
