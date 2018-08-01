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
  circle(r) {
    return Math.PI * Math.pow(r, 2);
  },
  ellipse(a, b) {
    return Math.PI * a * b;
  },
  parallelogram(b, h) {
    return b * h;
  },
  rectangle(l, w) {
    return l * w;
  },
  square(s) {
    return Math.pow(s, 2);
  },
  trapezoid(a, b, h) {
    return ((a + b) / 2) * h;
  },
  triangle(b, h) {
    return (b * h) / 2;
  }
};
exports.Volume = {
  cube(s) {
    return Math.pow(s, 3)
  },
  cylinder(r, h) {
    return Math.PI * Math.pow(r, 2) * h;
  },
  pyramid(b, h) {
    return (1/3) * b * h;
  },
  rectangular_prism(l, w, h) {
    return l * w * h;
  },
  sphere(r) {
    return (4 * Math.PI * Math.pow(r, 3)) / 3;
  }
};

// 2D-shapes
// 2D-shapes
// 2D-shapes
exports.Annulus = {
  Area = {
    inner_outer_radius_defined(r, R) {
      return Math.PI * (Math.pow(R, 2) - Math.pow(r, 2));
    },
    average_radius_width_defined(p, w) {
      return 2 * Math.PI * p * w;
    }
  },
  Average_radius(r, R) {
    return .5 * (r + R);
  },
  Width(r, R) {
    return R - r;
  }
};
exports.Circle = {
  Area(r) {
    return Math.PI * Math.pow(r, 2);
  },
  Circumference = {
    diameter_defined(d) {
      return Math.PI * d;
    },
    radius_defined(r) {
      return 2 * Math.PI * r;
    }
  },
  Diameter(r){
    return 2 * r;
  } 
};