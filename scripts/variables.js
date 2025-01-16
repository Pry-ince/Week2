// TO check whether the html and js are connected or not. We go to the html file and the below message should be displayed.

console.log("Connected");

/* STEP 1: Declare variables
    Use a-z, 0-9, A-Z and underscores, avoiding reserved names
    All program variables are generally declared at the beginning (called 'hoisting') */
//var and const keywords are different (have diff scopes) also, let keyword
//declaring or hoisting varibales
var myName;
var myAge;

/* STEP 2: Initialize variables = Adding values
Don't confuse a variable with no value with one that doesn't exist at all */
myName = "Priyansh";
//because i am 16, haha
myAge = 16;

/* STEP 3: Updating variables
Once a variable has been declared, this can be done any time */
myAge = 80;

// STEP 4: Variable types
// Numbers
//easy and have one number variable type that is number. No float, int, etc.
var num1 = 50;
var num2 = 3.14;
//typeof is to determine the type of the variable
console.log("The type of num1 is", typeof (num1));
console.log("The type of num2 is", typeof (num2));

// Strings (use '' or "")
var string1 = "Hello, how are you?";
console.log("The type of string1 is", typeof (string1));

// Booleans
var isCorrect = true;
var isCorrect2 = false;
console.log("The value is", typeof (isCorrect));
console.log("The value is", typeof (isCorrect2));

// Arrays = collection of values separated by comma
var colorsArray = ["red", "blue", "green"];
var numArray = [1, 2, 3];
//we can mix diff variables in a single array
//js is prototype based language, in array there is prototype
var mixedArray = [1, 2, 1.3, "Hundred", "green"];

// Objects = apis created with objects
var movieObj = {
    //key-value pair {key: value}
    movieName: "New Movie",
    ratings: 5
};

// STEP 5: Typing (JavaScript is a loosely-typed language)
// we can forget bracket, or semi-colon, but will not be any error.
// console.log("The value is", typeof (isCorrect));