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
  Rectangular_Prism: Rectangular_Prism = function(l, w, h) {
    return l * w * h;
  },
  Sphere: Sphere = function(r) {
    return (4 * Math.PI * Math.pow(r, 3)) / 3;
  }
};