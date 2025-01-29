let car = {
  make: "Toyota",
  name: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car);
// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John", 20);
// console.log(john);
// console.log(john.name);
// console.log(john.age);

//prototypal chaining

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} can make a sound`;
};

let snake = new Animal("Snake");
// console.log(snake);
// console.log(snake.speak());

Array.prototype.hitesh = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
// console.log(myArray.hitesh());

let myNewArray = [1, 2, 3, 4, 5, 6];
// console.log(myNewArray.hitesh());

// -------------------------------------------- C L A S S --------------------------------------------------

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

let myCar = new Vehicle("Toyota", "Camry");
// console.log(myCar);
// console.log(myCar.start());

class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myNewCar = new Car("Toyota", "Corolla")
// console.log(myNewCar.start());
// console.log(myNewCar.drive());

