let firstNumber = 0;
let secondNumber = 0;
let thirdNumber = 0;
let biggestNumber = 0;

firstNumber = prompt("Indica el primer número", 1);
secondNumber = prompt("Indica el segundo número", 1);
thirdNumber = prompt("Indica el tercer número", 1);

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);
thirdNumber = parseInt(thirdNumber);

if (firstNumber === secondNumber && secondNumber === thirdNumber)
  alert("Los tres valores proporcionados son iguales");
else {
  if (firstNumber >= secondNumber) biggestNumber = firstNumber;
  else biggestNumber = secondNumber;

  if (biggestNumber < thirdNumber) biggestNumber = thirdNumber;

  alert("El número mayor es " + biggestNumber);
}

alert(
  (biggestNumber =
    firstNumber === secondNumber && secondNumber === thirdNumber
      ? "Tern: Los tres valores proporcionados son iguales"
      : firstNumber < secondNumber
      ? secondNumber < thirdNumber
        ? thirdNumber
        : secondNumber
      : firstNumber < thirdNumber
      ? thirdNumber
      : firstNumber)
);

//alert("Tern: El número mayor es " + biggestNumber);
