const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((previous, next) => previous + next, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((previous, next) => previous * next, 1);
};

const power = function(number, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= number;
  }
	return result;
};

const factorial = function(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
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
