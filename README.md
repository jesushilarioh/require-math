# require-math
require-math is a project I've embarked upon while learning how to use the require in Node.js; Specifically, using the require keyword to require files within a project to use their functions by way of module exports. This repository has been published to npm.
## Install
```
npm install require-math
```
## Start
```javascript
const require_math = require("require_math");
```
## Methods
### *require_math.Basic_Math*
#### .add()
```javascript
require_math.Basic_Math.add(1, 2); // 3
```
#### .divide()
```javascript
require_math.Basic_Math.divide(1, 2);  // 0.5
```
#### .modulus()
```javascript
require_math.Basic_Math.modulus(1, 2); // 1
```
#### .multiply()
```javascript
require_math.Basic_Math.multiply(1, 2);  // 2
```
#### .subtract()
```javascript
require_math.Basic_Math.subtract(1, 2);  // -1
```
### *require_math.Formulas.Area* 
#### .circle(radius)
```javascript
require_math.Formulas.Area.circle(25); // 1963.4954084936207
```
#### .ellipse(semimajor axis 1, semimajor axis 2)
```javascript
require_math.Formulas.Area.ellipse(2, 5);  // 31.41592653589793
```
#### .parallelogram(base, height)
```javascript
require_math.Formulas.Area.parallelogram(2, 5);    // 10
```
#### .rectangle(length, width)
```javascript
require_math.Formulas.Area.rectangle(2, 5);    // 10
```
#### .square(side)
```javascript
require_math.Formulas.Area.square(25); // 625
```
#### .trapezoid(base 1, base 2, height)
```javascript
require_math.Formulas.Area.trapezoid(2, 5, 3); // 10.5
```
#### .triangle(base, height)
```javascript
require_math.Formulas.Area.triangle(2, 5); //5
```
### *require_math.Formulas.Volume* 
#### .cube(side)
```javascript
require_math.Formulas.Volume.cube(3);  // 27
```
#### .cylinder(radius, height)
```javascript
require_math.Formulas.Volume.cylinder(3, 4);   // 113.09733552923255
```
#### .pyramid(base, height)
```javascript
require_math.Formulas.Volume.pyramid(3, 4);    // 4
```
#### .rectangular_prism(length, width, height)
```javascript
require_math.Formulas.Volume.rectangular_prism(3, 4, 5);   // 60
```
#### .sphere(radius)
```javascript
require_math.Formulas.Volume.sphere(2);    // 33.510321638291124
```
### *require_math.Geometry_2D.Annulus*
#### .Area
##### .inner_outer_radius_defined(r, R);
```javascript
require_math.Geometry_2d.Annulus.Area.inner_outer_radius_defined(r, R);
```
##### .average_radius_width_defined(r, R);
```javascript
require_math.Geometry_2d.Annulus.Area.average_radius_width_defined(p, w)
