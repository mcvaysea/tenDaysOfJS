/////////////////////////////////////////////////////////////////////
//////////////10 DAYS OF JAVASCRIPT w/LEARNWEBCODE /////////////////
///////////////////////////////////////////////////////////////////

/////////////////////////////////////////////
// Day 07: JavaScript Returning vs Mutating
///////////////////////////////////////////

//===========================================
// JS push method will mutate an array
//=========================================

let pets = [
  { name: "SirMeowsAlot", species: "cat", age: 4 },
  { name: "SirBarksAlot", species: "dog", age: 2 },
  { name: "SirSquaksAlot", species: "bird", age: 9 },
  { name: "SirGrowlsAlot", species: "dog", age: 11 },
];

// This console log shows the current elements contained in the pets array
console.log(pets);

// The push method is an example of a mutation because it 'changes' the array contents
//pets.push({name: "SirSpitsAlot", species: "llama", age: 6});

// The push encapsulated inside the console log shows the element count result after the push has been completed.
console.log(pets.push({ name: "SirSpitsAlot", species: "llama", age: 6 }));

pets.push({name: "SirWhinesAlot", species: "dog", age: 1});

console.log(pets);

//==========================================
// JS map method will return but not mutate
//========================================

let arrayTest = pets.map(nameOnly);

function nameOnly(animal) {
  return animal.name;
}

console.log(arrayTest);

//=============================================
// JS filter method will return but not mutate
//===========================================


let dogs = pets.filter(forDogsOnly);

function forDogsOnly(theDogs) {
  return theDogs.species == "dog";
}

function onlyBabies(theAge) {
  return theAge.age < 3;
}


console.log(dogs);


let babyDogNames = pets.filter(forDogsOnly).filter(onlyBabies).map(nameOnly);

console.log(babyDogNames);




let youngPets = pets.filter(youngOnes);

function youngOnes(younglings) {
  return younglings.age < 8;
}

console.log(youngPets);