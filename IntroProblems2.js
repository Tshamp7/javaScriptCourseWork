/*
Phase I: Callbacks
Write a function titleize that takes an array of names and a function (callback). 
titleize should use Array.prototype.map to create a new array full of titleized 
versions of each name - titleize meaning "Roger" should be made to read 
"Mx. Roger Jingleheimer Schmidt". Then pass this new array of names to the callback, 
which should use Array.prototype.forEach to print out each titleized name.
*/

const { greenyellow } = require("color-name");

function titleize(names, callback) {
  const newArr = names.map((ele) => ele[0].toUpperCase() + ele.slice(1));
  callback(newArr);
}

function printSchmidts(arr) {
  arr.forEach((ele) => console.log(`Mx. ${ele} Jingleheimer Schmidt`));
}

console.log(titleize(["bill", "mary", "sue"], printSchmidts)); //-> Mx. Bill Jingleheimer Schmidt /n Mx. Mary Jingleheimer Schmidt /n Mx. Sue Jingleheimer Schmidt

/*
Phase II: Constructors, Prototypes, and this
First write a constructor function for an elephant. Each elephant should have a 
name, height (in inches), and array of tricks in gerund form (e.g. "painting a picture" rather than "paint a picture").

Next write a few prototype functions that will be shared among all elephants:

Elephant.prototype.trumpet: should print "(name) the elephant goes 'phrRRRRRRRRRRR!!!!!!!'"
Elephant.prototype.grow: should increase the elephant's height by 12 inches
Elephant.prototype.addTrick(trick): add a new trick to their existing repertoire
Elephant.prototype.play: print out a random trick, e.g. "(name) is (trick)!"
Hint: look up some JS Math methods!
Make sure to create an elephant and test all of these functions out on them method style!
*/

class Elephant {
  constructor(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
  }
  grow(inches) {
    this.height += inches;
  }
  addTrick(trick) {
    this.tricks.push(trick);
  }
  play() {
    const whichTrick = this.tricks[
      Math.floor(Math.random() * this.tricks.length)
    ];
    console.log(`${this.name} is ${whichTrick}!`);
  }

  static paradeHelper(elephant) {
    console.log(`${elephant.name} is romping down the road!`);
  }
}

// defining a function using prototype syntax.
Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'PHHRrrrrrRRRR!!`);
};

const mabeline = new Elephant("mabeline", 132, [
  "riding a bike",
  "going for a swim",
  "balancing on a ball",
]);
let ellie = new Elephant("Ellie", 185, [
  "giving human friends a ride",
  "playing hide and seek",
]);
let charlie = new Elephant("Charlie", 200, [
  "painting pictures",
  "spraying water for a slip and slide",
]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, [
  "trotting",
  "playing tic tac toe",
  "doing elephant ballet",
]);

let herd = [ellie, charlie, kate, micah];

herd.forEach((elephant) => Elephant.paradeHelper(elephant));

/* 
Phase IV: Closures
Let's make a function dinerBreakfast. Ultimately, we want it to return an 
anonymous closure, which we will be able to use to keep adding breakfast foods 
to our initial order.

Hints:

order should be initialized to a starting order (e.g. scrambled eggs and bacon) before the anonymous function can do its work.
The closure should capture/close over order
What should the return value of dinerBreakfast be?
Which function should take in the additional food as an argument?
Make sure you can call it multiple times and keep chaining on more breakfast foods!
*/

function dinerBreakfast() {
  let order = "I'd like scrambled eggs and bacon please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
}

let bfastOrder = dinerBreakfast("chocolate milk");
bfastOrder("chocolate chip pancakes");
bfastOrder("poopy old dog toast");
