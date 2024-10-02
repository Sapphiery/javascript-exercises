const convertToCelsius = function(tempInFahrenheit) {
  let tempInCelsius = (tempInFahrenheit - 32) * 5 / 9;

  //round to 1 decimal
  tempInCelsius = Math.round(tempInCelsius * 10) / 10;

  return tempInCelsius;
};

const convertToFahrenheit = function(tempInCelsius) {
  let tempInFahrenheit = tempInCelsius * 9 / 5 + 32;

  //round to 1 decimal
  tempInFahrenheit = Math.round(tempInFahrenheit * 10) / 10;

  return tempInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
