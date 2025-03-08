// example 1

console.log(window);
console.log(window.document);
console.log(document);

let anc = document.querySelector("a");
// anc.addEventListener("click", function () {
//   anc.innerText = "access not denied";
// });

anc.addEventListener("mouseover", function () {
  let para = document.querySelector("p");
  para.innerText = "yes, click the link below to proceed";
});

// Example 2: Traversing the DOM -->

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let cityList = document.getElementById("cityList");
    cityList.firstElementChild.classList.add("highlight");
  });

// Example-3: Manipulating DOM Elements -->

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "cyan";
  coffeeType.style.padding = "5px";
});

// Example-4: Creating and Inserting Elements -->

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "eggs";
  let shoppingList = document.getElementById("shoppingList");
  shoppingList.appendChild(newItem);
});

// Example-5: Removing DOM Element -->

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");

    let para = document.createElement("p");
    para.textContent = "3rd task has been deleted";

    taskList.lastElementChild.replaceWith(para);
  });


// Example-6: Event Handling in the DOM -->
