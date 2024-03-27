//variable and value;

//there are three key words used to declare a variable in js.
//let, var, const;

// let x = 5;
// let x = 5;
// var y = 5;
// var y = 6;

// const z = 5;
// console.log(x, y);

// 1. make use camelcase or snakecase for variable declarations

//camel case
// const hisName = "Shola";
// const countryName = "Nigeria";

// //snake case
// const his_name = "Shola";
// const country_name = "Nigeria";

// //some other ways of declaring variables
// const _country = "India";
// const $country = "United States";

//don't of declaration

//avoid using keywords

// const class = 'primary one';
// const var = 'food'
// const super = 'hello'

//avoid not using camel or snake case where necessary;
// avoid starting a variable name with capital letter;

//data types in javascript
//string data type
//number data type
//boolean data type
//object data type
//array data type
//undefined data type
//null data type
//bigInt data type

//string
//string data type represents any value that has to do with text;

// const firstName = "Shola";
// const numberString = "2";
// console.log(typeof firstName, typeof numberString);

//number
// const m = 5;
// const n = 10;

// console.log(typeof m, typeof n);

//boolean
// const isAged = false;
// const isCapable = true;

// console.log(typeof isAged, typeof isCapable);

//undefined
// let p;
// console.log(typeof p);

//null
// const booking = null;
// console.log(booking, typeof booking);

//bigInt
// const bigInteger = 198341818892745867825678678652796;
// console.log(typeof bigInteger);

//array
// const arrayOfNumber = [1, 2, 3, 4, 5, 6, 7, "ola", true];
// console.log(typeof arrayOfNumber);

//object
// const person = {
//   name: "John",
//   age: 16,
//   dateOfBirth: 12 - 12 - 1970,
// };

//data type conversion
// const number = 5;
// const numberString = String(number);
// console.log(typeof numberString);

// const firstName = "John";
// const stringNumber = Number(firstName);
// console.log(typeof stringNumber);

// const firstName = "John";
// const stringBoolean = Boolean(firstName);
// console.log(typeof stringBoolean);

//type coercion
// const x = 1;
// const y = "1";
// const z = x + y;
// console.log(z);

// //concatenation
// const firstName = "John";
// const secondName = "Smith";
// console.log(firstName + secondName);

// let p = 2 + 3 + 4 + "5";
// console.log(p);

//basic operators in javascript
//Assignment Operators
//Arithmetic Operators
//Comparison Operators
//Logical Operators
//Ternary Operators

//assignment operator
// var x = 2;
// x += 1; // x = x + 1
// x -= 1; // x = x - 1
// x /= 1; // x = x / 1
// x *= 1; // x = x * 1
// x %= 1; // x = x % 1

// //arithmetic operators
// var x = 1;
// var y = 2;
// var z = x + y;
// var z = x - y;
// var z = x * y;
// var z = x / y;
// var z = x % y;

// x++; // x = x + 1;
// x--; // x = x - 1
// x ** 2;
// console.log(x);

//comparison operators

var x = 2;
var y = "2";
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);
console.log(x == y);

//there are two equals to in javascript
//the equals  to that only checks for value;
//the equals  to that checks for value and data types;
