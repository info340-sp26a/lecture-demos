'use strict';

//an array of objects to work with
const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139, pronouns: 'they/them'},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152},
  {name: 'Square', height: 70, weight: 70},
]
// console.log(peopleArray);

// // const adaObj = peopleArray[0];
// // console.log(adaObj);
// // console.log(adaObj.height);
// // console.log(peopleArray[1].weight);

// // for(let i=0; i<peopleArray.length; i++){
// //   const whichPerson = peopleArray[i];
// //   console.log(whichPerson.name);
// // }

// // const whichPerson = peopleArray[0];
// // console.log("which person", whichPerson);

// // for(const whichPerson of peopleArray) {
// //   console.log(whichPerson.name);

// // }

// // const msg = "hello"


// // const myFunction = function(person) {
// //    console.log("Hello, "+person);
// // }

// function sayHello(name) { 
//    console.log("Hello, "+name);
// }

// const sayGoodbye = function(name) {
//     console.log("Goodbye," + name);
// }

// function callWithWorld(aFunction) {
//    aFunction("world");
// }

// callWithWorld(sayHello);
// callWithWorld(function(name) {
//     console.log("Goodbye," + name);
// });

// function getHello() {
//     return "Hello";
// }

// //print out the function
// console.log( getHello );

// function doTogether(firstCallback, secondCallback){
//     console.log(firstCallback);
//     firstCallback();
//     secondCallback();
//     console.log('at the "same time"!');
// }

// function patHead() {
//     console.log('pat your head');
// }

// function rubBelly() {
//     console.log('rub your belly');
// }

// doTogether(patHead, rubBelly());

const array = ['a','b','c'];
const printItem = function(item) {
   console.log(item);
}

// for(const whichPerson of peopleArray) {
//   console.log(whichPerson.name);

peopleArray.forEach(function(whichPerson) {
   console.log(whichPerson.name);
});

