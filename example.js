const require_math = require("./index.js"); // Replace "./index.js" with "require-math"

console.log("\n");

console.log("basic-math");
console.log("basic-math");
console.log("basic-math");
console.log(require_math.Add(1, 2));         // 3
console.log(require_math.Divide(1, 2));      // 0.5
console.log(require_math.Modulus(1, 2));     // 1
console.log(require_math.Multiply(1, 2));    // 2
console.log(require_math.Subtract(1, 2));    // -1


console.log("\n");
console.log("Formulas");
console.log("Formulas");
console.log("Formulas");
console.log("\n");

console.log("Area");
console.log(require_math.Area.Annulus.average_radius_width_defined(45, 5)); // 1413.7166941154069
console.log(require_math.Area.Annulus.inner_outer_radius_defined(34, 6)); // -3518.583772020568
console.log(require_math.Area.Circle(25)); // 1963.4954084936207
console.log(require_math.Area.Ellipse(2, 5));  // 31.41592653589793
console.log(require_math.Area.Equilateral_Triangle(5)); // 10.825317547305483
console.log(require_math.Area.Parallelogram(2, 5));    // 10
console.log(require_math.Area.Rectangle(2, 5));    // 10
console.log(require_math.Area.Regular_Polygon.number_of_sides_and_side_length_defined(3, 4)); // 6.928203230275511
console.log(require_math.Area.Regular_Polygon.number_of_sides_defined(6, 5)); // 64.9519052838329
console.log(require_math.Area.Sector_Of_Circle(55, 20));    // 11000
console.log(require_math.Area.Square(25)); // 625
console.log(require_math.Area.Trapezoid(2, 5, 3)); // 10.5
console.log(require_math.Area.Triangle(2, 5)); //5

console.log("Volume");
console.log(require_math.Volume.Cube(3));  // 27
console.log(require_math.Volume.Cylinder(3, 4));   // 113.09733552923255
console.log(require_math.Volume.Pyramid(3, 4));    // 4
console.log(require_math.Volume.Rectangular_Prism(3, 4, 5));   // 60
console.log(require_math.Volume.Sphere(2));    // 33.510321638291124
console.log("\n");

console.log("\n");
console.log("2D-Shapes");
console.log("2D-Shapes");
console.log("2D-Shapes");
console.log("\n");

console.log("Annulus");
console.log(require_math.Annulus.Area.average_radius_width_defined(45, 5)); // 1413.7166941154069
console.log(require_math.Annulus.Area.inner_outer_radius_defined(34, 6));   // -3518.583772020568
console.log(require_math.Annulus.Average_Radius(5, 6)); // 5.5
console.log(require_math.Annulus.Width(25, 4)); // -21

console.log("\n");
console.log("Circle");
console.log(require_math.Circle.Area(3));    // 28.274333882308138
console.log(require_math.Circle.Circumference.diameter_defined(68));    // 213.62830044410595
console.log(require_math.Circle.Circumference.radius_defined(67));  // 420.97341558103227
console.log(require_math.Circle.Diameter(29));  // 58

console.log("\n");
console.log("Ellipse");
console.log(require_math.Ellipse.Area(5, 6));   // 94.24777960769379
console.log(require_math.Ellipse.Circumference(2, 35)); // 142.54116485619627

console.log("\n");
console.log("Equilateral_Triangle");
console.log(require_math.Equilateral_Triangle.Area(25));    // 270.6329386826371
console.log(require_math.Equilateral_Triangle.Height(25));  // 21.650635094610966

console.log("\n");
console.log("Parallelogram");
console.log(require_math.Parallelogram.Area(5, 6)); // 30
console.log(require_math.Parallelogram.Perimeter(2, 6)); // 16