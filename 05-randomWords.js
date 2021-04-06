
/*Array of Strings*/
var CarBrands = ["Acura", "BMW", "Chrysler", "Dodge", "Ford", "Genesis", "Honda", "Infiniti"];

var randomIndex = Math.floor( Math.random() * CarBrands.length);

/*Use random index to choose a random car brand from the array*/
console.log(CarBrands[randomIndex]);
