# require-math
require-math is a project I've embarked upon while learning how to use the require in Node.js; Specifically, using the require keyword to require files within a project to use their functions by way of module exports. This repository has become has been published to npm.
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

<br>
### *require_math.Formulas.Area* 
#### .circle()
```javascript
require_math.Formulas.Area.circle(25); // 1963.4954084936207
```
#### .ellipse()
```javascript
require_math.Formulas.Area.ellipse(2, 5);  // 31.41592653589793
```
#### .parallelogram()
```javascript
require_math.Formulas.Area.parallelogram(2, 5);    // 10
```
#### .rectangle()
```javascript
require_math.Formulas.Area.rectangle(2, 5);    // 10
```
#### .square()
```javascript
require_math.Formulas.Area.square(25); // 625
```
#### .trapezoid()
```javascript
require_math.Formulas.Area.trapezoid(2, 5, 3); // 10.5
```
#### .triangle()
```javascript
require_math.Formulas.Area.triangle(2, 5); //5
```