// Objects
// key-value pairs in curly braces

const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrroooom!";
  },
};

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); //Inheritance
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "Whooooosh!";
};

console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine = function () {
  return "Shhhh...";
};
console.log(tesla.engine());
