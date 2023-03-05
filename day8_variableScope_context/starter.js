/////////////////////////////////////////////////////////////////////
//////////////10 DAYS OF JAVASCRIPT w/LEARNWEBCODE /////////////////
///////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
// Day 08: JavaScript Variable Scope & Context / this keyword
////////////////////////////////////////////////////////////

//===================
// JS Variable Scope
//==================

// let myName = "Sean";

// function nameFunction() {
//   let myName = "Sean the awesome";
//   if (2 + 2 == 4) {
//     let myName = "Sean the 1st";
//     console.log('inside the if statement:', myName);
//   }
//   console.log("inside our function:", myName);
// }

// nameFunction();
// console.log("in the global scope:", myName);



// let myName = "Sean";

// function nameFunction() {
//   if (2 + 2 == 4) {
//    let myName = "Sean the 3rd";
//   }
// }

// nameFunction();
// console.log("in the global scope:", myName);


//=====================
// JS Variable Context
//====================



let person = {
  firstName: "John",
  lastName: "Doe",
  driveCar() {
    function imAFunctionNotAMethod() {
      console.log(this);
    }
    imAFunctionNotAMethod();
    console.log(this.firstName + " " + this.lastName + " is driving a car.");
  }
}

person.driveCar();

// new function to inhale and exhale
function breathe() {
  console.log(this.firstName + " " + this.lastName + " just inhaled and exhaled.");
}

// use the breath function with the 'called' object of person since we have the 'this' keyword to refer back to the 'person'
breathe.call(person);










