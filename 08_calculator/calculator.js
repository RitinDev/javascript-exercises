const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (nums) {
  let sum = 0;
  for (let num of nums) sum += num;
  return sum;
};

const multiply = function (nums) {
  let res = 1;
  for (const num of nums) res *= num;
  return res;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }

  return res;
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
