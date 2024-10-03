const convertToCelsius = function(fTemp) {
  let cTemp = ((fTemp - 32) * 5 ) / 9;
  return Number(cTemp.toFixed(1));
};





const convertToFahrenheit = function(ctemp) {
  let ftemp = (ctemp * 9) / 5 + 32;
  return Number(ftemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
