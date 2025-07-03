const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];

// const newArray = myArrayA.concat(myArrayB);
// console.log(newArray);
const newArray = [...myArrayA, ...myArrayB];
console.log(newArray);

const newArray2 = [myArrayA, myArrayB];
console.log(newArray2);

// const newArray = myArray.slice(2);
// const newArray2 = myArray.slice(1);
// const newArray3 = myArray.slice(2, 5);

// console.log(newArray);
// console.log(newArray2);
// console.log(newArray3);

// myArray.reverse();
// console.log(myArray);

// //join

// const newString = myArray.join();

// const newArray = newString.split(",");

// console.log(newArray);
