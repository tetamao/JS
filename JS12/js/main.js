// Functions

//Methods = built-in Functions

"Dave".toLowerCase();

// Function Declaration Syntax:

// function sum(num1, num2) {
//   console.log(num1);
//   console.log(num2);
//   if (num2 === undefined) {
//     return num1 + num1;
//   }
//   return num1 + num2;
// }

// // console.log(sum());
// console.log(sum(2));

// function getUserNameFromEmai(email) {
//   return email.slice(0, email.indexOf("@"));
// }

// console.log(getUserNameFromEmai("playerOne@SomeRandomEmail.com"));

//const

// const getUserNameFromEmai = function (email) {
//   return email.slice(0, email.indexOf("@"));
// };

// console.log(getUserNameFromEmai("user@Github.com"));

// // Arrow Function
// const getUserNameFromEmai = (email) => {
//   return email.slice(0, email.indexOf("@"));
// };

// console.log(getUserNameFromEmai("user@Github.com"));

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("september"));
