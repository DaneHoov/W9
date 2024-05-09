const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
//O(n)
function addNums10(increment) {
  let result = [];
  let num = increment;
  for (let i = 0; i < 10; i++) {
    result.push(addNums(num));
    num += increment;
  }
  return result;
}

// Runs `addManyNums` in 10 increasing increments
//O(n^2)
function addManyNums10(increment) {
  let result = [];
  let num = increment;
  for (let i = 0; i < 10; i++) {
    result.push(addManyNums(num));
    num += increment;
  }
  return result;
}

module.exports = [addNums10, addManyNums10];
