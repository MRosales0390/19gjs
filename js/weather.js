let currentWeather = prompt(
  "Cómo está el clima en tu ciudad? \na. Soleado \nb. Lluvioso \nc. Nevando \nd. Nublado",
  "a"
);
let currentTemperature = parseInt(
  prompt("Cuál es la tempera actual en °C?", 20)
);

currentTemperature = isNaN(currentTemperature) ? 20 : currentTemperature;

let farenheitDegTemp = currentTemperature * (9 / 5) + 32;
let cityWeather = "";

switch (currentWeather.toLowerCase()) {
  case "a":
    cityWeather = "Soleado";
    break;
  case "b":
    cityWeather = "Lluvioso";
    break;
  case "c":
    cityWeather = "Nevando";
    break;
  case "d":
    cityWeather = "Nublado";
    break;
  default:
    cityWeather = "Ventoso";
}

console.log(
  `En tu ciudad, el día está ${cityWeather} con una temperatura de ${farenheitDegTemp}°F`
);
