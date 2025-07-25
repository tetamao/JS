// Web Storage API

// Not part of the DOM - refers to the Window API
// Available to JS via the global variable: window

// We do not have to type window. It is implied:

// window.alert("ok!");
// alert("ok!");
// window.alert(window.location);
// alert(location);

const myArray = ["eat", "sleep", "code"];
const myObject = {
  name: "Dave",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

// myObject.logName();

// sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(mySessionData);
localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const key = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(key);
