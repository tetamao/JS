// var, let, const

// var x = 1;
// var x = 2;
// console.log(x);

// let x = 1;
// x = 2;
// console.log(x);

// const x = 1;
// x = 2;
// console.log(x);

//global scope
var x = 1;
let y = 2; //Function scoped
const z = 3; // BLOCK SCOPED

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
  var x = 10;
  const z = 5;

  {
    var x = 11; //function scoped
    const z = 6; //block scoped
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }
  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);
}

myFunc();
