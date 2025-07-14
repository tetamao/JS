// Objects
// key-value pairs in curly braces

const myObj = { name: "Dave" };

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "Coffee",
    afternoon: "Iced Tea",
  },
  action: function () {
    return `Time for ${this.beverage.morning}`;
  },
};
console.log(anotherObj.action());
