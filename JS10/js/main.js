// User Input
// alert("Hello world!");

// let myBoolean = confirm("Ok===True\nCancel===False");
// console.log(myBoolean);

let name = prompt("please input your name.");
if (name) {
  console.log(name.length);
  console.log(name.trim().length);
  console.log(name.trim());
} else {
  console.log("You didn't enter your name.");
}
