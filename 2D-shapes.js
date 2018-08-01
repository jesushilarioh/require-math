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