// 2D-shapes
// 2D-shapes
// 2D-shapes
exports.Annulus = {
  Area: {
    average_radius_width_defined: average_radius_width_defined = function(p, w) {
      return 2 * Math.PI * p * w;
    },
    inner_outer_radius_defined: inner_outer_radius_defined = function(r, R) {
      return Math.PI * (Math.pow(R, 2) - Math.pow(r, 2));
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
exports.Ellipse = {
  Area(a, b) {
    return Math.PI * a * b;
  },
  Circumference(a, b) {
    // Approximation
    return Math.PI * ((3 * (a + b)) - Math.sqrt((a + (3 * b)) * (b + (3 * a))));
  }
};
exports.Equilateral_Triangle = {
  Area(s) {
    return (Math.sqrt(3) / 4) * Math.pow(s, 2);
  },
  Height(s) {
    return (Math.sqrt(3) / 2) * s;
  }
};