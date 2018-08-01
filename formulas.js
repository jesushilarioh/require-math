// Formulas
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
    return Math.pow(s, 3);
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