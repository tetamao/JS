// Javascript Classes

class Pizza {
  constructor(pizzaSize) {
    this._size = pizzaSize;
    this._crust = "original"; //should not be revised
  }

  getCrust() {
    return this._crust;
  }

  setCrust(pizzaCrust) {
    this._crust = pizzaCrust;
  }

  // getToppings() {
  //   return this.toppings;
  // }

  // setToppings(topping) {
  //   this.toppings.push(topping);
  // }
  // bake() {
  //   console.log(
  //     `Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
  //   );
  // }
}

// const myPizza = new Pizza("pepperoni", "small");
// myPizza.setCrust("thin");
// myPizza.bake();
// myPizza.setToppings("sausage");
// myPizza.setToppings("olives");
// console.log(myPizza.getToppings());

// Child class
// class SpecialtyPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize);
//     this.type = "The Works";
//   }
//   slice() {
//     console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
//   }
// }

// const mySpecialty = new SpecialtyPizza("medium");
// mySpecialty.slice();
