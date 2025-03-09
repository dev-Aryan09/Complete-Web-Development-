const person = {
  name: "aryan",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;  // when we transfer data from one variable(memory) to another variable(memory), it losses it's context
greetFunction()

const boundGreet = person.greet.bind({name: "hitesh"})  // here we are are giving value explicitly using bind()
boundGreet()


// go and read about: bind(), call() and apply()