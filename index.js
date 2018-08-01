// basic-math
// basic-math
// basic-math
exports.Add = function (x, y){
  return x + y;
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
  
// formulas
// formulas
// formulas
exports.Area = {
  circle: circle = function(r) {
    return Math.PI * Math.pow(r, 2);
  },
  ellipse: ellipse = function(a, b) {
    return Math.PI * a * b;
  },
  parallelogram: parallelogram = function(b, h) {
    return b * h;
  },
  rectangle: rectangle = function(l, w) {
    return l * w;
  },
  square: square = function(s) {
    return Math.pow(s, 2);
  },
  trapezoid: trapezoid = function(a, b, h) {
    return ((a + b) / 2) * h;
  },
  triangle: triangle = function(b, h) {
    return (b * h) / 2;
  }
};
exports.Volume = {
  cube: cube = function(s) {
    return Math.pow(s, 3)
  },
  cylinder: cylinder = function(r, h) {
    return Math.PI * Math.pow(r, 2) * h;
  },
  pyramid: pyramid = function(b, h) {
    return (1/3) * b * h;
  },
  rectangular_prism: rectangular_prism = function(l, w, h) {
    return l * w * h;
  },
  sphere: sphere = function(r) {
    return (4 * Math.PI * Math.pow(r, 3)) / 3;
  }
};

// 2D-shapes
// 2D-shapes
// 2D-shapes
exports.Annulus = {
  Area: {
    inner_outer_radius_defined: inner_outer_radius_defined = function(r, R) {
      return Math.PI * (Math.pow(R, 2) - Math.pow(r, 2));
    },
    average_radius_width_defined: average_radius_width_defined = function(p, w) {
      return 2 * Math.PI * p * w;
    }
  },
  Average_radius: Average_radius = function(r, R) {
    return .5 * (r + R);
  },
  Width: Width = function(r, R) {
    return R - r;
  }
};
exports.Circle = {
  Area: Area = function(r) {
    return Math.PI * Math.pow(r, 2);
  },
  Circumference: {
    diameter_defined: diameter_defined = function(d) {
      return Math.PI * d;
    },
    radius_defined: radius_defined = function(r) {
      return 2 * Math.PI * r;
    }
  },
  Diameter: Diameter = function(r){
    return 2 * r;
  } 
};