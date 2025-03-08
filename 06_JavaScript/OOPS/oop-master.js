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

let myNewCar = new Car("Toyota", "Corolla");
// console.log(myNewCar.start());
// console.log(myNewCar.drive());

// -----------Encapsulation-=--------------

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());

// ------------------------ Abstraction -----------------

class CoffeMachine {
  start() {
    //DB calls
    // filter values
    return `Starting the machine....`;
  }

  brewCoffee() {
    //complex calculation
    return `Brewing the coffee`;
  }

  pressStartButton() {
    let msg1 = this.start();
    let msg2 = this.brewCoffee();
    return `${msg1} + ${msg2}`
    
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());


// ------------------ polymorphism --------------------

class Bird{
  fly(){
    return `Flying....`
  }
}

class Penguin extends Bird{
  fly(){
    return `Penguin can't fly`
  }
}

let bird = new Bird()
let penguin = new Penguin()

// console.log(bird.fly());
// console.log(penguin.fly());

//-------- static method --------

class Calculator{

  static add(a,b){
    return a+b
  }
}

// let miniCalc = new Calculator()
// console.log(miniCalc.add(2,3));

// console.log(Calculator.add(2,3));


// -------- getters and setters --------

class Employee{
  constructor(name, salary){
    this.name = name
    this._salary = salary    // underscore indicates there is a special meaning which is about to come
  }

  get salary(){
    this._salary = this.salary
  }

  set salary(value){

  }

}

let emp = new Employee("Aryan", 50000)
// console.log(emp);
console.log(emp._salary);

