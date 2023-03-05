/////////////////////////////////////////////////////////////////////
//////////////10 DAYS OF JAVASCRIPT w/LEARNWEBCODE /////////////////
///////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// Day 05: JavaScript Decision Making
////////////////////////////////////////

//==================
// JS Decisions
//==================

// let cartCount = 20;

// if (cartCount > 9) {
//   document.write('Congrats, your order is on the way.');
// } else {
//   document.write('Sorry, we do not ship small orders.');
// }

/* Types of JS values:
      numbers: 100 -- no quotes
      string: 'lion' -- needs quotes ' ' , " "
      objects: {name: "SirMixAlot", species:"rapper"} -- needs {}
      array: [2, 'dog', true, {species:"rapper"}] -- needs []
      boolean: true || false -- either true or false -- no quotes or anything
*/



// document.write("There are 2 strawberries");
// document.write("There are 3 strawberries");
// document.write("There are 4 strawberries");
// document.write("There are 5 strawberries");

let strawberryCount = 2;

while (strawberryCount <= 20) {
  document.write("There are " + strawberryCount + " strawberries.<br>");
  strawberryCount++;
};
