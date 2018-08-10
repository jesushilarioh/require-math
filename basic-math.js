// basic-math
// basic-math
// basic-math
exports.Add = function (x, y){
  return x + y;
};
exports.Add_All = function(){
  let sum = 0
  for (i = 0; i < arguments.length; i++){
    sum += arguments[i]
  }
  return sum;
};
exports.Divide = function (x, y) {
  return x / y;
};
exports.Modulus = function (x, y) {
  return x % y;
};
exports.Multiply = function (x, y) {
  return x * y;
};
exports.Subtract = function (x, y) {
  return x - y;
};
exports.Subtract_All = function(){

  let array = [];
  for (i = 0; i < arguments.length; i++){
    array[i] = arguments[i];
  }
  array.sort((a, b) => {
    return b - a;
  });

  let sum = array[0];
  for (i = 1; i < array.length; i++){
      sum -= array[i];
  }
  return sum;
};