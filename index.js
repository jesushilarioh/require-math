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
  Circle: Circle = function(r) {
    return Math.PI * Math.pow(r, 2);
  },
  Ellipse: Ellipse = function(a, b) {
    return Math.PI * a * b;
  },
  Parallelogram: Parallelogram = function(b, h) {
    return b * h;
  },
  Rectangle: Rectangle = function(l, w) {
    return l * w;
  },
  Square: Square = function(s) {
    return Math.pow(s, 2);
  },
  Trapezoid: Trapezoid = function(a, b, h) {
    return ((a + b) / 2) * h;
  },
  Triangle: Triangle = function(b, h) {
    return (b * h) / 2;
  }
};
exports.Volume = {
  Cube: Cube = function(s) {
    return Math.pow(s, 3)
  },
  Cylinder: Cylinder = function(r, h) {
    return Math.PI * Math.pow(r, 2) * h;
  },
  Pyramid: Pyramid = function(b, h) {
    return (1/3) * b * h;
  },
  Rectangular_prism: Rectangular_prism = function(l, w, h) {
    return l * w * h;
  },
  Sphere: Sphere = function(r) {
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
  Average_Radius: Average_Radius = function(r, R) {
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