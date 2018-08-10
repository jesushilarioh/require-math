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
  Regular_Polygon: {
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
    return .5 * b * h;
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
    return (4 / 3) *  Math.PI * Math.pow(r, 3);
  }
};

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
exports.Parallelogram = {
  Area(base, height) {
    return base * height;
  },
  Perimeter(side, base) {
    return (2 * side) + (2 * base);
  }
};