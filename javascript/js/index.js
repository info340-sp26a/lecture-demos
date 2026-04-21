'use strict';

console.log("Hello world");
// console.log("It's such a nice day!");
// console.log("I wish we were outside");

// const x = "hello";
// x = 42;
// console.log(x);

// let hoursSlept;
// console.log(hoursSlept);

// console.log(typeof 4)

// const tenNum = 10;
// const tenStr = '10';

// const isSame = (0 == '');
// console.log(isSame);

// const lettersArray = ['a', 'b', 'c'];
// console.log(lettersArray);

// console.log(lettersArray[4]);
// lettersArray[1] = 'Bee';
// console.log(lettersArray);
// lettersArray[5] = 'f';
// console.log(lettersArray);


// const agesObj = {
//   sarah:42, 
//   amit:35, 
//   zhang:13,
//   'joel ross': 'old',
// }

// console.log(agesObj);

const numWords = {1:'one', 2:'two', 3:'three'}
const keys = Object.keys(numWords);
console.log(keys);

const agesObj = {alice:40, bob:35, charles:13};

const agesArr = [13,14,15];


const name = 'alice'
console.log( agesObj[name] );
agesObj['fred'] = 19; //adds the key and assigns value
console.log(agesObj);
