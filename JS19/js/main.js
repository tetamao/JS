// JavaScript Errors and Error Handling
"use strict";
// const variable = "Dave";
// console.log(variable);

// Object.create();

// const name = "Dave";
// name = "Joe";

// const makeError = () => {
//   try {
//     const name = "Dave";
//     name = "Joe";
//   } catch (err) {
//     console.warn(err);
//     console.log(err);
//     console.table(err);
//     console.error(err.name);
//     console.error(err.stack);
//     console.error(err.message);
//   }
// };
// makeError();

const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("Odd number!");
      }
      console.log("Even number!");
    } catch (err) {
      console.error(err.stack);
    } finally {
      console.log("...finally");
      i++;
    }
  }
};
makeError();
