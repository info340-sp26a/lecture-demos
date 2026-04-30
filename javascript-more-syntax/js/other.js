'use strict';

console.log("executing other.js");

const peopleArray = ["John", "Paul", "George", "Ringo"];
console.log(peopleArray);

export function sayHello() {
  console.log("hello");
}

// export default function otherDefault() {
//   console.log("Other is best module!");
// }

export const password = "a secret";

export default function Button() {

}
