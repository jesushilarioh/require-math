const md = module.exports;

md.addition = (a, b) => {
  return a + b;
};

md.subtraction = (a, b) => {
  return a - b;
};

md.mutiplication = (a, b) => {
  return a * b;
};

md.division = (a, b) => {
  if (b == 0)
    return "Sorry 0 cannot denominator";
  else
    return a / b;
};