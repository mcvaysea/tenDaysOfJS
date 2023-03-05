/////////////////////////////////////////////////////////////////////
//////////////10 DAYS OF JAVASCRIPT w/LEARNWEBCODE /////////////////
///////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// Day 04: JavaScript Arrays
////////////////////////////////////////

//==================
// JS ARRAYS
//==================

let myFavNums = [7, 9, 13, 5, 21, 52];
let myWords = ["blue", "yellow", "green", "red"];
let myPetObjects = [
  { name: "SirMeowsAlot", species: "cat" },
  { name: "SirBarksAlot", species: "dog" },
  { name: "SirChurpsAlot", species: "bird" },
  { name: "SirSpitsAlot", species: "llama" },
];

console.log(myWords);
myWords.push("orange");
console.log(myWords);
myWords.splice(1, 1);
console.log(myWords);

console.log(myFavNums);
console.log(myFavNums[4]);

console.log(myPetObjects[2]);
console.log(myPetObjects[1].species);
console.log(myPetObjects[3].name + ' is a ' + myPetObjects[3].species);


/* primitive data can also act as objects
and you can perform specific methods()
on each like so:
*/

// let myName = "Sean";
// console.log(myName.toUpperCase());

// let myNum = 7.8923098;
// console.log(myNum);
// console.log(myNum.toFixed(1));
// console.log(myNum.toFixed(2));
// console.log(myNum.toFixed(3));
// console.log(myNum.toFixed());
