// formulas
// formulas
// formulas
exports.Area = {
  Annulus: {
    average_radius_width_defined: average_radius_width_defined = function(p, w) {
      return 2 * Math.PI * p * w;
    },
    inner_outer_radius_defined: inner_outer_radius_defined = function(r, R) {
      return Math.PI * (Math.pow(R, 2) - Math.pow(r, 2));
    }
  },
  Circle: Circle = function(r) {
    return Math.PI * Math.pow(r, 2);
  },
  Ellipse: Ellipse = function(a, b) {
    return Math.PI * a * b;
  },
  Equilateral_Triangle: Equilateral_Triangle = function(s) {
    return (Math.sqrt(3) / 4) * Math.pow(s, 2);
  },
  Parallelogram: Parallelogram = function(b, h) {
    return b * h;
  },
  Rectangle: Rectangle = function(l, w) {
    return l * w;
  },
  Rectangle_Polygon: {
    number_of_sides_and_side_length_defined(n, s) {
      return .25 * n * Math.pow(s, 2) * (1 / Math.tan(Math.PI / n));
    },
    number_of_sides_defined(n, R) {
      return .5 * n * Math.pow(R, 2) * Math.sin((2 * Math.PI) / n);
    }
  },
  Sector_Of_Circle: Sector_Of_Circle = function(o, r) {
    return .5 * o * Math.pow(r, 2);
  },
  Square: Square = function(s) {
    return Math.pow(s, 2);
  },
  Trapezoid: Trapezoid = function(a, b, h) {
    return ((.5 * (a + b)) * h);
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