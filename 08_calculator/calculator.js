const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, num) => product * num, 1);
};

const power = function(num1, num2) {
  let result = 1;
  for(let i = 0; i < num2 ; i++){
    result *= num1;
  }
  return result;
	
};

const factorial = function(num) {
	if(num <= 1) return 1;
  let result = 1;
  while(num){
    result *= num;
    num--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
