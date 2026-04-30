const add = (x, y) => x + y;

const subtract = (x, y) => x - y;

const multiply = (x, y) => x * y;

const power = (x, y) => x ** y;

const divide = (x, y) => {
  if (y === 0) throw new Error("Zero division error");
  return x / y;
};

module.exports = { add, subtract, multiply, divide, power };
