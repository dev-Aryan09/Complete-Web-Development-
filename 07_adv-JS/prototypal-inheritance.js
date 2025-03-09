// The whole idea in JavaScript is that object inherit properties from other objects via prototype chain
// and here is an example

function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
}

let aryan = new Person("Aryan")
console.log(aryan);

aryan.greet()
