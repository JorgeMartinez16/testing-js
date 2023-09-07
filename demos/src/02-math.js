function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

module.exports = {
  sum,
  multiply,
  div,
};
