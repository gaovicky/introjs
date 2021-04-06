
/*Function passing through conditional statements*/
function NobleGases(num){
  if (num == 2) {
    return "Helium";
  }

  else if (num == 10) {
    return "Neon";
  }

  else if (num == 18) {
    return "Argon";
  }

  else if (num == 36) {
    return "Krypton";
  }

  else if (num == 54) {
    return "Xenon";
  }

  else if (num == 86) {
    return "Radon";
  }

  else {
    return "Not a noble gas";
  }
}

console.log (NobleGases(2));
console.log (NobleGases(10));
console.log (NobleGases(18));
console.log (NobleGases(36));
console.log (NobleGases(54));
console.log (NobleGases(86));
console.log (NobleGases (1));
