/////////////////////////////////////////////////////////////////////
//////////////10 DAYS OF JAVASCRIPT w/LEARNWEBCODE /////////////////
///////////////////////////////////////////////////////////////////

/////////////////////////////////////////////
// Day 06: JavaScript Higher Order Functions
///////////////////////////////////////////

//===========================================
// JS Function that accepts another function
//=========================================

/* The addEventListener is a function in itself
    the ourFunction is a function that we create
    to pass into the addEventListener function
    as an aurgument.
*/
// document.addEventListener("click", ourFunction);

// function ourFunction() {
//   alert("Thank you for clicking on my page.");
// }

// function doubleMe(num1) {
//   return num1 * 2;
// }

// console.log(doubleMe(20));
// document.write(doubleMe(20));

//==========================
// Higher Order Function
//=========================

/*  We can create a function that returns a 
    function...the createMultiplier function
    returns the function to multiply a number
    by the multiplier that we want.
*/
// function createMultiplier(multiplier) {
//   return function(x) {
//     return x * multiplier
//   }
// }

// /*  We can then assign the funtion to a
//     variable to perform the multiplier.
//     And since the outer function returns
//     an inner function of the number, it
//     gets applied to the multiplier.
// */
// let doubleMe = createMultiplier(2);  // <=== We set the muliplier to (2) which doubles what number we feed it.
// let tripleMe = createMultiplier(3);  // <=== We set the muliplier to (3) which will triple what number we feed it.
// let quadrupleMe = createMultiplier(4);  // <=== We set the muliplier to (4) which multiplies what number we feed it by 4.

// console.log(doubleMe(10));  // <=== This takes the number 10 and muliplier multiplies it by (2) which doubles the number 10 so you get 20.
// console.log(tripleMe(5));  // <=== This takes the number 5 and muliplier multiplies it by (3) to get 15.
// console.log(quadrupleMe(4));  // <=== This takes the number 4 and muliplier multiplies it by (4) to get 16.

//====================================
// Higher Order Functions with Arrays
//==================================

// create initial array of elements
let myColors = ["red", "blue", "orange", "green"];
console.log(myColors);

// add element to the array
myColors.push("purple");
console.log(myColors);

// This is a JS built-in higher order function that will perform a task (forEach) element in the array
myColors.forEach(saySomethingNice); // <=== you can feed a funtion into this built-in function

// This is a function that we create to pass into the above built-in function as an argument. 
function saySomethingNice(color) {
  console.log("The color " + color + " is a great color.");
  document.write("The color " + color + " is a great color.<br>");
}
