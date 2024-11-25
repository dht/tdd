// for loops
function sum(a, b) {
  console.log('L3 | a: ' + a, ', b: ' + b);
  return a + b;
}

function run() {
  const output = [];
  console.log('L9 | initial length: ' + output.length);

  for (let i = 0; i < 5; i++) {
    console.log('L12 | i: ' + i);
    const result = sum(20, i);
    output.push(result);
  }

  console.log(output);
}

run();
