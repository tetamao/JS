// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, and Asyn/Await

// Callbacks

// function firstFunction(parameters, callback) {
//   // do stuff
//   callback();
// }

// // AKA "callback hell"
// firstFunction(para, function () {
//   // do stuff
//   secondFunction(para, function () {
//     thirdFunction(para, function () {});
//   });
// });

// Promises

// 3 states: Pending, Fulfilled, Rejected

// const myPromise = new Promise((resolve, reject) => {
//   const error = true;
//   if (!error) {
//     resolve("Yes! resolved the promise!");
//   } else {
//     reject("No! rejected the promise.");
//   }
// });

// console.log(myPromise);

// myPromise
//   .then((value) => {
//     return value + 1;
//   })
//   .then((newValue) => {
//     console.log(newValue);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// const users = fetch("https://jsonplaceholder.typicode.com/users");

// //pending
// console.log(users);

// Async / Await

const myUsers = {
  userList: [],
};

const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  // console.log(jsonUserData);
  return jsonUserData;
};

myCoolFunction();

const anotherFunc = async () => {
  const data = await myCoolFunction();
  // console.log(data);
  myUsers.userList = data;
};

anotherFunc();
console.log(myUsers.userList);

// const users = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     // console.log(data);
//     data.forEach((user) => {
//       console.log(user);
//     });
//   });

// console.log(users);
