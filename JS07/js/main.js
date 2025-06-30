// Conditionals: If Statements
// 可单条件，可多条件，可嵌套，与其他语言的if仅语法差异

let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;

if (customerIsBanned) {
  reply = "No soup for you!";
} else if (soup && crackers) {
  reply = `Here is your order of ${soup}`;
} else if (soup) {
  reply = `Here is your order of ${soup}`;
} else {
  reply = `Sorry, we're out of soup`;
}
console.log(reply);
