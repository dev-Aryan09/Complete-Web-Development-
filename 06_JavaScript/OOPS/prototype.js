let computer = { cpu: 12 };
let lenevo = { screen: "HD",
    __proto__:computer,
 };
let tomHardware = {};

// console.log(`lenevo`, lenevo.__proto__);


let genericCar = {tyres: 4}
let tesla = {
    driver: "AI",
}

Object.setPrototypeOf(tesla, genericCar)

// console.log(`tesla`, Object.getPrototypeOf(tesla));
// console.log(tesla);
// console.log(tesla.tyres);


// Prototypal inherrtance 

let a = {
    name0: "Harry",
    language: "JavaScript"
}

let p = {
    run: () => {
        alert("run")
    }
}

p.__proto__ = {
    name: "aryan"
}

a.__proto__ = p

// a.run()
// console.log(a.name);