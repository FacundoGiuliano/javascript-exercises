const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let suma = 0;
	for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma;
};

const multiply = function(array) {
  let multi = 1;
	for (let i = 0; i < array.length; i++) {
    multi *= array[i];
  }
  return multi;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
