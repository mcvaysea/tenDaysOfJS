/////////////////////////////////////////////////////////////////////
//////////////10 DAYS OF JAVASCRIPT w/LEARNWEBCODE /////////////////
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////
// Day 10: JavaScript Browser Practice
/////////////////////////////////////////

//=========================
// JS Web Browser Practice
//=======================

//++++++++++++++++++++++++
// 
//+++++++++++++++++++++++

let ourForm = document.getElementById("ourForm");
let inputField = document.getElementById("inputField")
let toDoList = document.getElementById("toDoList");

ourForm.addEventListener("submit", (event) => {
  event.preventDefault();
  createItem(inputField.value);
})

function createItem(itemInput){
  let ourHTML = `<li>${itemInput}<button onclick="deleteListItem(this)">Delete</button></li>`;
  toDoList.insertAdjacentHTML("beforeend", ourHTML);
  inputField.value = "";
  inputField.focus();
}

function deleteListItem(itemToDelete) {
  itemToDelete.parentElement.remove();
}