const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  let result = [];
  let num = increment;
  for (let i = 0; i < 10; i++) {
    const startTime = Date.now();
    result.push(addNums(num));
    const endTime = Date.now();
    console.log(endTime - startTime);
    num += increment;
  }
  return result;
}

function addManyNums10Timing(increment) {
  let result = [];
  let num = increment;
  for (let i = 0; i < 10; i++) {
    const startTime = Date.now();
    result.push(addManyNums(num));
    const endTime = Date.now();
    num += increment;
    console.log(endTime - startTime);
  }
  return result;
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
