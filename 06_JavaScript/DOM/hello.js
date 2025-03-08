// example 1

// console.log(window);
// console.log(window.document);
// console.log(document);

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

document.getElementById("clickMeButton").addEventListener('mouseover', function(){
// alert('yeah! you have to click this')
})

// Example-7: Event Delegation -->

document.getElementById("teaList").addEventListener("click", function(event){
  if(event.target && event.target.matches(".teaItem")){
    alert("You selected: " + event.target.textContent)
  }
})

// Example-8: Form Handling -->

document.getElementById("feedbackForm").addEventListener('submit', function(event){
  event.preventDefault();
  let feedback = document.getElementById("feedbackInput").value;
  console.log(feedback)

  document.getElementById('feedbackDisplay').textContent = `Feedback is ${feedback}`
})

// Example-9: DOM Content Loadefd -->

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('domStatus').textContent = `DOM Content Loaded`
})

// Example-10: CSS Classes Manipulation -->

document.getElementById('toggleHighlight').addEventListener('click', function(){
  let description = document.getElementById("descriptionText");
  description.classList.toggle('highlight')
})

