# require-math
require-math is an extension of JavaScript's built-in Math Object. It allows you to work with geometric formulas, 2D-shape formulas, and basic math calculations. Try it out in the browser and also with Node.js
<br><br>
require-math is a project I've embarked upon while learning how to use the require keyword in Node.js; Specifically, using the require keyword to require files within a project to use their functions by way of module exports. 

## Install (Node.js)
```
npm i require-math
```
## Install (in browser)
[![](https://data.jsdelivr.com/v1/package/npm/require-math/badge)](https://www.jsdelivr.com/package/npm/require-math)
```html
<script src="https://cdn.jsdelivr.net/npm/require-math@3.1.1/index.min.js"></script>
```
## Start
```javascript
// Load all categories 
const require_math = require("require-math");

// Load methods for basic-math
const basic_math    = require("require-math/basic-math");

// Load methods for formulas
const math_formulas = require("require-math/formulas");

// Load methods for 2D-shapes
const shapes_2D     = require("require-math/2D-shapes");
```
## Methods
### **basic-math**
#### .Add()
```javascript
require_math.Add(1, 2); // 3
```
#### .Divide()
```javascript
require_math.Divide(1, 2);  // 0.5
```
#### .Modulus()
```javascript
require_math.Modulus(1, 2); // 1
```
#### .Multiply()
```javascript
require_math.Multiply(1, 2);  // 2
```
#### .Subtract()
```javascript
require_math.Subtract(1, 2);  // -1
```
### **formulas**
### *.Area = {}* 
#### .Annulus: {*average_radius_width_defined*, *inner_outer_radius_defined*}
##### .average_radius_width_defined(average radius, width)
```javascript
require_math.Annulus.Area.average_radius_width_defined(45, 5); // 1413.7166941154069
```
##### .inner_outer_radius_defined(inner radius, outer radius)
```javascript
require_math.Annulus.Area.inner_outer_radius_defined(34, 6); // -3518.583772020568
```
#### .Circle(radius)
```javascript
require_math.Area.Circle(25); // 1963.4954084936207
```
#### .Ellipse(semimajor axis 1, semimajor axis 2)
```javascript
require_math.Area.Ellipse(2, 5);  // 31.41592653589793
```
#### .Equilateral_Triangle(side)
```javascript
require_math.Area.Equilateral_Triangle(5); // 10.825317547305483
```
#### .Parallelogram(base, height)
```javascript
require_math.Area.Parallelogram(2, 5); // 10
```
#### .Rectangle(length, width)
```javascript
require_math.Area.Rectangle(2, 5); // 10
```
#### .Regular_Polygon: {*number_of_sides_and_side_length_defined*, *number_of_sides_defined*}
##### .number_of_sides_and_side_length_defined(number of sides, side length)
```javascript
require_math.Area.Regular_Polygon.number_of_sides_and_side_length_defined(3, 4); // 6.928203230275511
```
##### .number_of_sides_defined(number of sides, circumradius)
```javascript
require_math.Area.Regular_Polygon.number_of_sides_defined(6, 5)); // 64.9519052838329
```
#### .Sector_Of_Circle(angle in radians, radius)
```javascript
require_math.Area.Sector_Of_Circle(55, 20);    // 11000
```
#### .Square(side)
```javascript
require_math.Area.Square(25);  // 625
```
#### .Trapezoid(base 1, base 2, height)
```javascript
require_math.Area.Trapezoid(2, 5, 3);  // 10.5
```
#### .Triangle(base, height)
```javascript
require_math.Area.Triangle(2, 5); //5
```

### *.Volume = {}* 
#### .Cube(side)
```javascript
require_math.Volume.Cube(3);  // 27
```
#### .Cylinder(radius, height)
```javascript
require_math.Volume.Cylinder(3, 4);  // 113.09733552923255
```
#### .Pyramid(base, height)
```javascript
require_math.Volume.Pyramid(3, 4); // 4
```
#### .Rectangular_Prism(length, width, height)
```javascript
require_math.Volume.Rectangular_Prism(3, 4, 5);  // 60
```
#### .Sphere(radius)
```javascript
require_math.Volume.Sphere(2); // 33.510321638291124
```

### **2D-shapes**
### *.Annulus = {}*
#### .Area: {*average_radius_width_defined*, *inner_outer_radius_defined*}
##### .average_radius_width_defined(average radius, width)
```javascript
require_math.Annulus.Area.average_radius_width_defined(45, 5); // 1413.7166941154069
```
##### .inner_outer_radius_defined(inner radius, outer radius)
```javascript
require_math.Annulus.Area.inner_outer_radius_defined(34, 6); // -3518.583772020568
```
#### .Average_Radius(inner radius, outer radius)
```javascript
require_math.Annulus.Average_Radius(5, 6); // 5.5
```
#### .Width(inner radius, outer radius)
```javascript
require_math.Annulus.Width(25, 4); // -21
```
### *.Circle = {}*
#### .Area(radius)
```javascript
require_math.Circle.Area(3);    // 28.274333882308138
```
#### .Circumference: {*diameter_defined*, *radius_defined*}
##### .diameter_defined(diameter)
```javascript
require_math.Circle.Circumference.diameter_defined(68);    // 213.62830044410595
```
##### .radius_defined(radius)
```javascript
require_math.Circle.Circumference.radius_defined(67);  // 420.97341558103227
```
#### .Diameter(radius)
```javascript
require_math.Circle.Diameter(29);  // 58
```
### *.Ellipse = {}*
#### .Area(semimajor axis, semiminor axis)
```javascript
require_math.Ellipse.Area(5, 6);   // 94.24777960769379
```
#### .Circumference(semimajor axis, semiminor axis)
```javascript
require_math.Ellipse.Circumference(2, 35); // 142.54116485619627
```
### *.Equilateral_Triangle = {}*
#### .Area(side)
```javascript
require_math.Equilateral_Triangle.Area(25);    // 270.6329386826371
```
#### .Height(side)
```javascript
require_math.Equilateral_Triangle.Height(25);  // 21.650635094610966
```