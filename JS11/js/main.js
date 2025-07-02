// Loops
// let myNumber = 1;
// while (myNumber <= 50) {
//   console.log(myNumber);
//   myNumber++;
// }

// let myNumber = 0;
// while (myNumber < 50) {
//   myNumber += 2;
//   console.log(myNumber);
// }
//don't create an endless loop

//do while loop
// let myNumber = 50;
// do {
//   console.log(myNumber);
// } while (myNumber < 50);

// //for loop
// let name = "HuaG";
// for (let i = 0; i <= name.length; i++) {
//   console.log(name.charAt(i));
// }

//for loop break
// let name = "HuaG";
// let counter = 0;
// let myLetter;

// while (true) {
//   myLetter = name[counter];
//   console.log(myLetter);
//   if (myLetter === "H") break;
//   counter++;
// }

//for loop continue
let name = "HuaG";
let counter = 0;
let myLetter;

while (counter <= 3) {
  myLetter = name[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "a") break;
  counter++;
}
console.log(counter);
