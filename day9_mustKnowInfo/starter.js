/////////////////////////////////////////////////////////////////////
//////////////10 DAYS OF JAVASCRIPT w/LEARNWEBCODE /////////////////
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////
// Day 09: JavaScript Misc Must Know Info
/////////////////////////////////////////

//========================
// JS Misc Must Know Info
//=======================

//++++++++++++++++++++++++
// Anonymous Function
//+++++++++++++++++++++++

// Function that doesn't have a name
// Typically called in an area where you won't need to reuse the function again and again

// document.addEventListener("click", function() {
//   alert("Thank you for clicking");
// });

//++++++++++++++++++++++++
// Arrow Function
//+++++++++++++++++++++++

// Arrow Functions do not include the word function and are passed to the block with an => symbol
// document.addEventListener("click", () => {
//   alert("Thank you for cleaner code clicking");
// });

// Arrow Functions can alternatively be written on a single line for a cleaner look with omitting the {}'s
//document.addEventListener("click", () => alert("Thank you for one-line code clicking"));

// REGULAR FUNCTION SYNTAX
// let myNumbers = [10, 500, 2000];
// let doubleMyNumbers = myNumbers.map(function (nums) {
//   return nums * 2;
// });
// console.log(doubleMyNumbers);

// ARROW FUNCTION SYNTAX
// let myNumbers = [10, 500, 2000];
// let doubleMyNumbers = myNumbers.map((nums) => {
//   return nums * 2;
// });
// console.log(doubleMyNumbers);

// OneLINE FUNCTION SYNTAX
// let myNumbers = [10, 500, 2000, 3];
// let doubleMyNumbers = myNumbers.map((nums) => nums * 2);
// console.log(doubleMyNumbers);

//++++++++++++++++++++++++
// Function Hoisting
//+++++++++++++++++++++++
/* 
cool();


// THIS FUNCTION WILL BE HOISTED SO YOU WILL BE ABLE TO CALL THE FUNCTION BEFORE THE FUNCTION IS DECLARED
// function cool() {
//   console.log("This is super cool.");
// }

// THIS FUNCTION WILL NOT BE HOISTED SO YOU WON'T BE ABLE TO CALL THE FUNCTION BEFORE IT IS DECLARED
let cool = function() {
  console.log("Hey there");
}
/// LIKE THIS
cool();

// console.log(strawberryCount);
// let strawberryCount = 100;
 */


//++++++++++++++++++++++++
// Template Literals
//+++++++++++++++++++++++
/* 
let myName = "Sean";

// This is not ideal
console.log("Hello, my name is " + myName + " and the sky is blue.");

// This is template literal
console.log(`Hello, my name is ${myName} and the sky is blue in template literal`);
console.log(`And...also 2 + 2 is ${2 + 2}.`);
 */



//++++++++++++++++++++++++
// The semi-colon
//+++++++++++++++++++++++

let myName = "Sean"; console.log(`Hello, my name is ${myName} and the sky is blue in template literal and one line with a semi-colon`);