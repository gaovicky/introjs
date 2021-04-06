
/*Array of Strings*/
var CarBrands = ["Acura", "BMW", "Chrysler", "Dodge", "Ford", "Genesis", "Honda", "Infiniti"];

/*Generate random whole number between 0-7*/
var randomIndex = Math.floor( Math.random() * CarBrands.length);

/*Create a sentence*/
var fullSentence = CarBrands[randomIndex] + " is a car brand.";

/*Use random index to choose a random car brand from the array*/
console.log(fullSentence);
