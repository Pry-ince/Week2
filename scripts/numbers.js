/* STEP 1: Number types (integer, float, and double)
    declare and initialize an integer and a float, then in the console, reveal the number type with typeof(varName) */
var step1a = 20;
var step1b = 3.14;

// Note - there are also different number systems: binary, octal, and hexadecimal

/* STEP 2: Arithmetic operators
+ (addition), - (subtraction), * (multiplication), / (division), % (remainder or modulo) */
var step2a = 20;
var step2b = 5;
var sum = step2a + step2b;
console.log(sum);

var diff = step2a - step2b;
console.log(diff);

var multiple = step2a * step2b;
console.log(multiple);

var div = step2a / step2b;
console.log(div);

var mod = step2a % step2b;
console.log(mod);

var exp1 = step2a * (step2b / 8) + 2 - 0.5;
console.log(exp1);

var exp2 = step2a * step2b / (8 + 2) - 0.5;
console.log(exp2);

// Try declaring and initializing a couple of variables as numbers

/* OR… num1 * num2 / 8 + 2 - 0.5;
(just like in BODMAS)
*/

/* Keep in mind operator precedence, just like you were taught in math class (*, /, +, -)
num1 + num2 * 5 - 25 ... is not 575 ... it is 215 */

/* If you want to avoid this precedence, use parenthesis
(num1 + num2) * 5 - 25 */

/* STEP 3: Increment and decrement operators
++ and -- are mostly found inside loops to move a counter variable to the next value when needed, either up or down. */
var step3 = 20;
//post incrementation
console.log(step3++); // 20
console.log(step3); //21
console.log(++step3); // 22
console.log(step3--); // 22
console.log(step3); // 21
console.log(--step3); // 20

// Note 1 - you cannot increment/decrement a number directly
// Note 2 - typing num++ or num-- in the console will output the number before incrementing or decrmenting - try ++num or --num, instead

/* STEP 4: Assignment Operators
= (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment) */
// assign the value on the right to the variable or objects or arrays on the left
var step4 = 20;
var final = 500;
//many developers use this method.
final += step4; // final = final + step4 
console.log(final); //520

final -= step4; //final = final - step4
console.log(final); //500

/* STEP 5: Comparison Operators
===	(strict equality), !==	(strict-non-equality), < (less than), > (greater than), <= (less than or equal to), >=	(greater than or equal to) */
var step5a = 5;
var step5b = "5";
var step5c = [5];
var step5d = ["5"];

// == only checks the value, not the data type
console.log(step5a == step5b); // true
console.log(step5a === step5b); // false

// === and !== || == and !=
console.log(step5a != step5b); // false
console.log(step5a !== step5b); // true

//checking greater and less than (greater or equal to)
var step5e = 6;