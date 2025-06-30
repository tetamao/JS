// Return a random letter of your name
myName = "HuaG";
stringLength = myName.length;
console.log(stringLength);
lettern = Math.floor(Math.random() * stringLength);
console.log(myName.charAt(lettern));
