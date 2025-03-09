// Closure is basically a function but a special type

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

// function outer() {
//   let counter = 4;

//    function inner() {
//     // this function is a inner function, that forms a closure
//     counter++;
//     console.log(counter); // use variable declared in the parent function
//   };
//   inner();
// }

// outer();    

function outer() {
  let counter = 4;

   return function() {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());


