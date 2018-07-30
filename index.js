exports.Basic_Math = {
  add(x, y) {
    return x + y;
  },
  divide(x, y) {
    return x / y;
  },
  modulus(x, y) {
    return x % y;
  },
  multiply(x, y) {
    return x * y;
  },
  subtract(x, y) {
    return x - y;
  }
}

exports.Geometry_2D = {
  Annulus = {
    area = {
      inner_outer_radius_defined(r, R) {
        return Math.PI * (Math.pow(R, 2) - Math.pow(r, 2));
      },
      average_radius_width_defined(p, w) {
        return 2 * Math.PI * p * w;
      }
    },
    average_radius(r, R) {
      return .5 * (r + R);
    },
    width(r, R) {
      return R - r;
    }
  },
  Circle = {
    area(r) {
      return Math.PI * Math.pow(r, 2);
    },
    circumference = {
      diameter_defined(d) {
        return Math.PI * d;
      },
      radius_defined(r) {
        return 2 * Math.PI * r;
      }
    },
    diameter(r){
      return 2 * r;
    } 
  }
}