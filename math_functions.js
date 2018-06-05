const addition = (a, b) => {
  return a + b;
}

const subtraction = (a, b) => {
  return a - b;
}

const multiplication = (a, b) => {
  return a * b;
}

const division = (a, b) => {
  if (b == 0)
    return "Sorry. 0 cannot be denominator";
  else
    return a / b;
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division
};