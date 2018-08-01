# require-math
require-math is a project I've embarked upon while learning how to use the require in Node.js; Specifically, using the require keyword to require files within a project to use their functions by way of module exports. This repository has been published to npm.
## Install
```
npm install require-math
```
## Start
```javascript
const require_math = require("require-math");
```
## Methods
### *basic-math*
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
### *formulas*
### *.Area = {}* 
#### .circle(radius)
```javascript
require_math.Area.circle(25); // 1963.4954084936207
```
#### .ellipse(semimajor axis 1, semimajor axis 2)
```javascript
require_math.Area.ellipse(2, 5);  // 31.41592653589793
```
#### .parallelogram(base, height)
```javascript
require_math.Area.parallelogram(2, 5); // 10
```
#### .rectangle(length, width)
```javascript
require_math.Area.rectangle(2, 5); // 10
```
#### .square(side)
```javascript
require_math.Area.square(25);  // 625
```
#### .trapezoid(base 1, base 2, height)
```javascript
require_math.Area.trapezoid(2, 5, 3);  // 10.5
```
#### .triangle(base, height)
```javascript
require_math.Area.triangle(2, 5); //5
```

### *.Volume = {}* 
#### .cube(side)
```javascript
require_math.Volume.cube(3);  // 27
```
#### .cylinder(radius, height)
```javascript
require_math.Volume.cylinder(3, 4);  // 113.09733552923255
```
#### .pyramid(base, height)
```javascript
require_math.Volume.pyramid(3, 4); // 4
```
#### .rectangular_prism(length, width, height)
```javascript
require_math.Volume.rectangular_prism(3, 4, 5);  // 60
```
#### .sphere(radius)
```javascript
require_math.Volume.sphere(2); // 33.510321638291124
```

### *2D-shapes*
### *.Annulus = {}*
#### .Area: {}
##### .inner_outer_radius_defined(inner radius, outer radius)
```javascript
require_math.Annulus.Area.inner_outer_radius_defined(r, R);
```
##### .average_radius_width_defined(average radius, width)
```javascript
require_math.Annulus.Area.average_radius_width_defined(p, w);
```
#### .Average_radius(inner radius, outer radius)
```javascript
require_math.Annulus.Average_radius(r, R);
```
#### .Width(inner radius, outer radius)
```javascript
require_math.Annulus.Width(r, R);
```
### *.Circle = {}*
#### .Area(radius)
```javascript
require_math.Circle.Area(r);
```
#### .Circumference: {*diameter_defined*, *radius_defined*}
##### .diameter_defined(diameter)
```javascript
require_math.Circle.Circumference.diameter_defined(d);
```
##### .radius_defined(radius)
```javascript
require_math.Circle.Circumference.radius_defined(r);
```
#### .Diameter(radius)
```javascript
require_math.Circle.Diameter(r);
```