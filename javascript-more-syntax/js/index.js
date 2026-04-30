'use strict';

import { sayHello, password } from './other.js'
//import otherFunction from './other.js';

import Button from './other.js';

console.log("executing main.js")

//an array of objects to work with
const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139, pronouns: 'they/them'},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
console.log(peopleArray);


sayHello();
console.log("I know your password: " + password);

//otherFunction();


// const foo = (params) => {
//   console.log("foo" + params);
// }


// const myArray = [1, 2, 3];
// const [x, y, z, a] = myArray;
// // const x = myArray[0];
// // const y = myArray[1];
// // const z = myArray[2];
// console.log(x); //=> 1;
// console.log(y); //=> 2;
// console.log(z); //=> 3;
// console.log(a); //=> 3;


// const myObject = {a: 1, b: 2, c: 3};
// const {a, c, b, d} = myObject;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// function getBMI(personObj) {
//   const {height, weight} = personObj;
  
//   return 703*weight/(height*height);
// }


// const originalArray = ['a', 'b', 'c', 'd'];

// const newArray = ['e,', ...originalArray, 'e']

// console.log(newArray);

