// console.log("Hello World");
// alert("Hello Javascript");

// const input = prompt("Enter your greetings");
// if (input === "How are you") {
//   alert("I am fine");
// } else if (input === "have you eaten") {
//   alert("Yes, I have eaten");
// } else if (input === "what did eat") {
//   alert("I ate rice");
// } else {
//   alert("Enjoy your day");
// }

//variable declaration in Javascript

//let, var, const

// var fruit = "apple"; // variable name is fruit and value is apple

// var fruit = "orange";

// const name = "ade";

// let firstName = "John";

//some rules that has to do with variable declarations
// do not start a variable with capital letter
// let FirstName = 'Ade'    // this is not professional;

// when you have to words joined together, use camelCase or snakeCase;

// const isActive = false;    //camel case
// const is_active = false;    // snake case

// you can start a variable name with some special characters like underscore, dollar sign and more......

// const $name = "shade";
// const _fruit = "pawpaw";

//you cannot declare variable with keywords

// const let = 'ade'
// var const = 'constant'
// const super = 'super'

// you cannot start a variable with number
// const 12Name = 'name'
// const name12 = 'ade'

// Javascript data types
//Javscript data types are divided into two types: primitive types and the non-primitive;

//Primitive Data Types
//string data type
// const name = "Bola";

// const lastName = "Shola";
// const number = '2000'

//number data type

// const number = 50;
// const a = 5;
// const b = 10;
// const c = a * b;
// console.log(c);

// boolean data type

// const isActive = false;
// const isDeleted = true;

//undefined data type
// let a;

// console.log(a);

//null data type

// const empty = null;
// console.log(empty);

//bigInt data type

// const bigInt = BigInt(12345678902344875674646);

// non-primitive data type
//object
// const name = {
//   firstName: 'John',
//   lastName: 'Doe',
// }

// //array data type

// const fruit = ['orange', 'mango', 'watermelon']

//Javascript type conversion;

// const name = "Ade";
// console.log(typeof name);

// const even = 20;
// console.log(typeof even);

// const isApproved = true;
// console.log(typeof isApproved);

// const name = "Ade";
// const nameNumber = Number(name);
// console.log(typeof nameNumber);

// const number = 20;
// const numberString = String(number);
// console.log(typeof numberString);

// const name = "Shakir";
// const nameBoolean = Boolean(name);
// console.log(typeof nameBoolean);

//type coercion in Javascript

// const name = "coercion";
// const number = 2;

// const plus = name + number;
// console.log(plus);
// console.log(typeof plus);

// const number = 1 + "1";
// console.log(typeof number);

//x, y and z

// let x, y, z;
// x = 2;
// y = 3;
// z = 4;

// console.log(x, y, z);

//Javascript basic operators
//arithmetic operators
//assignment operators
//logical operators
//comparison operators

//ARITHMETIC operators
// const x = 6;
// const u = 7;
// // const y = x + u;
// // const y = x - u;
// // const y = x * u;
// // const y = x / u;
// var m = 5;
// m++; // m = m + 1;
// m--; // m = m - 1;
// m = m ** 2;
// console.log(m);

// const y = 3;
// const x = 4;
// const z = x % y;
// console.log(z);

//ASSIGNMENT OPERATORS
// let x = 10;
// x += 5; // x = x + 5;
// x -= 10; // x = x - 10;
// x *= 10; // x = x * 10;
// console.log(x);

//LOGICAL OPERATORS
//we have and && , or ||
// const x = 5;
// const y = 10;

// if (x && y) {
//   console.log("great");
// }
// if (!x || y) {
//   console.log("great");
// }

//COMPARISON OPERATORS
// const y = 2;
// const x = "2";

// console.log(x == y);
// console.log(x === y);
// console.log(y < x);
// console.log(y <= x);
// console.log(y > x);
// console.log(y >= x);

//if and else statements
//there is if, else if and else;
// const fruit = "apple";
// const beverage = "Bournvita";

// if (fruit === "mango") {
//   console.log("I love mango");
// } else if (fruit === "apple") {
//   console.log("I love apple");
// } else {
//   console.log("this is not mango and this is not apple");
// }

//ternary operator;

// const fruit = "apple";
// const beverage = "Bournvita";

// fruit === "Bournvita"
//   ? console.log("I love apple")
//   : console.log("this is not an apple");

//string methods

//the length method
// const fruit = "apple";
// console.log(fruit.length);

//the slice method
// const fruit = "apple"; // ple
// console.log(fruit.slice(2, 5));

// const name = "olamide";
// console.log(name.slice(3, 7));
// console.log(name.slice(-4)); //pagination

//the substring method

// const fruit = "Apple, Banana, Orange";
// const fruitPart = fruit.substring(7, 13);
// console.log(fruitPart);

//substr method
// const fruit = "Apple, Banana, Orange";
// const fruitPart = fruit.substr(7, 6);
// console.log(fruitPart);

//replace method

// const name = "Olamide Adedeji";
// const replacedName = name.replace("Adedeji", "Olalekan");
// console.log(replacedName);

// let text = "Please visit Microsoft!";
// let newText = text.replace(/microsoft/i, "W3Schools");

// console.log(newText);

//replaceall method
// let text = "I love cats. Cats are very easy to love. Cats are very popular";

// text = text.replaceAll(/Cats/g, "Dogs");
// text = text.replaceAll(/cats/g, "dogs");
// text = text.replaceAll(/love/g, "like");

// console.log(text);

// let name = "ade";

//touppercase and tolowverxcase method

// name = name.toUpperCase();
// console.log(name);

//concat method
// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3);

// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();
// console.log(text2);

//character at method
// let text = "HELLO WORLD";
// // let char = text.charAt(6);

// //split method

// text = text.split(",");
// console.log(text);

//arrays and array methods
// const name = ["Bola", "Ade", "Shola"];

// const name = [];

// name[0] = "Shade";
// name[1] = "Olamide";
// name[2] = "Olalekan";
// console.log(name);

const name = ["Bola", "Ade", "Shola"];
// name[1] = "Bisi";
// console.log(typeof name, name);

// const nameString = name.toString();
// console.log(name.length, typeof nameString);

const lastElement = name[name.length - 1];
console.log(lastElement);