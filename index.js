//operators
//arithmetic operators, assignment operators, conditional operators, logical operators,comparison operators.

//arithmetic operators
// const a = 5;
// const b = 6;
// const c = a + b;
// const c = a * b;
// const c = a / b;
// console.log(c);

//concatenation
// const firstName = "Shola";
// const lastName = "Bayo";
// console.log(firstName + lastName);
// console.log(firstName + " " + lastName);

//assignment operators
// let y = 5;
// y += 10; // y = y + 10;
// console.log(y);

// y *= 10; // y = y * 10;
// console.log(y);

// y -= 10; // y = y - 10;
// console.log(y);

// y++; // y = y + 1;
// console.log(y);

// y--; // y = y - 1;
// console.log(y);

//comparison operators
// const bolaAge = 25;
// const titiAge = 30;

// console.log(bolaAge > titiAge);
// console.log(bolaAge < titiAge);
// console.log(bolaAge <= titiAge);
// console.log(bolaAge >= titiAge);
// console.log(bolaAge == titiAge);

// console.log(typeof name);

//javascript template literals
// const firstName = "Ade";
// const lastName = "Shola";
// const age = 30;
// const birthYear = 1993;
// const occupation = "Student";
// console.log(firstName + lastName);
// console.log(`${firstName} ${lastName}`);

// const description = `I am ${firstName} ${lastName}. I am ${age} years old. I was born in ${birthYear}. I am a ${occupation}.`;
// console.log(description);

//if else statements
// const age = 18;
// const isEligible = age >= 15;
// if (age >= 15) {
//   console.log("you can apply for admission");
// } else {
//   console.log("please wait for more year to apply for admission");
// }

//write a code that analyzes the performances of students in the department of Software Engineering. The total marks for Javascript is 100marks, the pass mark is 50marks, the excellent mark is 80marks. Prompt for their mark and tell them their results.

// const totalMark = 100;
// const passMark = 50;
// const excellentMark = 80;

// const individualMark = prompt("Enter your score");
// if (individualMark == 80) {
//   alert("Excellent, you passed the course with excellent result");
// } else if (individualMark == 50) {
//   alert(" Awesome, you passed the course");
// } else if (individualMark < 50) {
//   alert("Sorry, you failed this course, try more next time");
// }

//assignment
//Mark and John are trying to compare their BMI(body mass index) which is calculated using the formula  BMI = mass/h2(height * height).

//challenge
//1. store Mark's and John's mass and height in variables.
//2. calculate both their BMIs using the formula.
//3. write a code that check if Mark's BMI is greater than John's BMI.

//TEST DATA
//1. Marks mass 78kg, height is 1.69m tall
//Johns mass 92kg, height is 1.95m tall

//2. Marks mass 95kg, height is 1.88m tall
//Johns mass 85kg, height is 1.76m tall

//1. write a javascript function that reverse the below variable.
//Test data: const number = 12345;

//solution
// const marksMass = 78;
// const johnsMass = 92;
// const marksHeight = 1.69;
// const johnsHeight = 1.95;
// const marksMassTwo = 95;
// const johnsMassTwo = 85;
// const marksHeightTwo = 1.88;
// const johnsHeightTwo = 1.76;

// const marksBMI = 78 / (1.69 * 1.69);
// // console.log(marksBMI);  // 27.309968138370508

// const johnsBMI = 92 / (1.95 * 1.95);
// // console.log(johnsBMI); 24.194608809993426

// if (marksBMI > johnsBMI) {
//   console.log("Marks BMI is greater");
// } else {
//   console.log("Johns BMI is greater");
// }

// truthy and falsy values
//zero, empty string, undefined, null, NaN;
// const zero = 0;
// if (zero) {
//   console.log("Hello world");
// } else {
//   console.log("this is  a falsy value");
// }

// const businessName = "";
// console.log(businessName);
// if (businessName) {
//   console.log("This is a good business name");
// } else {
//   console.log("you need to register your brand");
// }

//type conversion and coercion
// const dateOfBirth = "1998";
// console.log(typeof dateOfBirth);
// const dateOfBirthNumber = Number(dateOfBirth);
// console.log(typeof dateOfBirthNumber, dateOfBirthNumber);

// const number = 45;
// console.log(typeof number, number);
// const numberString = String(number);
// console.log(typeof numberString, numberString);

//exercise
//1. convert the data types to string
// 60, 80, 89, 67.

//2. convert the data types to number
//'shola', 'tade', "soji"

//type coercion
// const age = 23;
// const desc = "I am";
// const ageYear = "years old";
// console.log(desc + " " + age + " " + ageYear);

// const x = "25";
// const y = 5;
// const z = x + y;
// console.log(z);

//1. let m = '1' + 1;
// 2. m--;
//3. let p = 2 + 3 + 4 + "5"
//4. let n = "10" - "4" - "3" - 2 + '15'

//switch statement
// const age = 5;

// switch (age) {
//   case 35:
//     console.log("You are now an adult");
//     break;

//   case 56:
//     console.log("You are a grandpa");
//     break;

//   default:
//     console.log("Grow up dear");
// }

const fruitPlan = "monday";
// switch (fruitPlan) {
//   case "monday":
//     console.log("I will eat apple");
//     break;
//   case "tuesday":
//     console.log("I will eat banana");
//     break;
//   case "wednesday":
//     console.log("I will eat pineapple");
//     break;
//   default:
//     console.log("I will drink water");
// }

// function numberReversed() {
//   const number = 12345;
//   //   console.log(typeof number);
//   const numberString = number.toString();
//   //   console.log(typeof numberString);

//   const numberSplit = numberString.split("");
//   //   console.log(numberSplit);

//   const reversedNumber = numberSplit.reverse();
//   //   console.log(reversedNumber);

//   const reversedNumberString = reversedNumber.join("");
//   //   console.log(reversedNumberString);

//   const reversedNumberStringNumber = Number(reversedNumberString);
//   //   console.log(typeof reversedNumberStringNumber);
// }

// numberReversed();

// 2. write a javascript function that order the below alphabets in alphabetical order.
// Test data: const alphabet = 'paranoid';

// function alphabetOrder() {
//   const alphabet = "paranoid";
//   //   const numberSort = 95673428;
//   //   const numberString = numberSort.toString();
//   const alphabetString = alphabet.split("");
//   //   const numberSplit = numberString.split("");
//   console.log(alphabetString);
//   //   console.log(numberSplit);

//   const alphabetSplit = alphabetString.sort();
//   //   const numberSplitSort = numberSplit.sort();
//   //   console.log(numberSplitSort);

//   const alphabetSortedString = alphabetSplit.join("");
//   console.log(alphabetSortedString);
// }

// alphabetOrder();

//3. write a javascript function to split a string and convert it into an array of words.
//Test data: const stringData = 'John Doe';

// function stringToArray() {
//   const stringData = "John Doe";
//   const stringArray = stringData.split(" ");
//   console.log(stringArray);
// }

// stringToArray();

//Looping through the elements of an array;

// const arrayElements = [1, 3, 2, 4, 5, 6];

// for (let i = 0; i < arrayElements.length; i++) {
//   const arrSub = arrayElements[i] - 1;
//   console.log(arrSub);
// }

//1. given an array with elements, return  the  largest element in the array using javascript function;

//Test data: const arrayNumber = [20, 21, 18, 15, 10, 9, 8, 7, 45]

// function getLargestElement() {
//   const arrayNumber = [20, 21, 18, 15, 10, 9, 8, 7, 45];
//   let largestElement = arrayNumber[0];
//   for (let i = 0; i < arrayNumber.length; i++) {
//     if (arrayNumber[i] > largestElement) {
//       largestElement = arrayNumber[i];
//     }
//   }
//   console.log(largestElement);
// }

// getLargestElement();

//2. using javascript function, write a program that returns the multiples of 3 and 5 between 0 and 100;

// function getThreeMultiples() {
//   for (let i = 0; i < 100; i++) {
//     // console.log(i);
//     if (i % 3 === 0) {
//       console.log(i);
//     }
//   }
// }

// getThreeMultiples();

// function getFiveMultiples() {
//   for (let i = 0; i < 100; i++) {
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//   }
// }

// getFiveMultiples();

// const fruits = ["apple", "orange", "lettuce", "pineapple"];

// console.log(fruits.slice(1, 2));

//sorting array randomly
// const points = [40, 100, 1, 5, 25, 10];
// const pointSorted = points.sort(() => {
//   return 0.5 - Math.random();
// });

// console.log(pointSorted);

//the yate method
// const points = [40, 100, 1, 5, 25, 10];

// function sortArray() {
//   for (let i = points.length - 1; i > 0; i--) {
//     // console.log(i);
//     // const check = Math.floor(2.4);
//     // console.log(check);
//     let j = Math.floor(Math.random() * (i + 1));
//     // console.log(j);
//     let k = points[i];
//     // console.log(k);
//     points[i] = points[j];
//     // console.log(points[i]);
//     points[j] = k;
//     // console.log(points[j]);
//   }
//   return points;
// }

// const getSortArray = sortArray(points);
// console.log(getSortArray);

//pushing into an array
// const years = [1991, 2007, 2008, 2009, 1969, 1990, 2000];
// const ages = [];

// const getArrayFunc = () => {
//   for (let i = 0; i < years.length; i++) {
//     // console.log(i);
//     // console.log(years[i]);
//     ages.push(2037 - years[i]);
//   }
//   console.log(ages);
// };

// getArrayFunc();

//Array toString() Method
// const number = [2, 3, 4];
// const arrayString = number.toString();
// console.log(arrayString);

// // Array join() Method
// const arrayStringJoin = number.join("");
// console.log(typeof arrayStringJoin);

// // array pop() Method
// const arrayPop = number.pop();
// console.log(number);

// // array push() Method
// const arrayPush = number.push(5);
// console.log(arrayPush);
// console.log(number);

// //array shift() Method
// const arrayShift = number.shift();
// console.log(number);

// //array unshift() Method

// const arrayUnshift = number.unshift(7);

// console.log(number);

// //array splice() Method
// const arraySplice = number.splice(0, 0, 6);
// console.log(number);

// //array slice() Method
// const arraySlice = number.slice(2);
// console.log(arraySlice);

// //array sort() Method
// const _arrayNumber = number.sort();
// console.log(_arrayNumber);

// const numberToBeSorted = [40, 100, 1, 5, 25, 10];
// const arraySort = numberToBeSorted.sort((a, b) => {
//   return a - b;
// });

// console.log(arraySort);

// const _numberToBeSorted = Math.floor(2.5);

// console.log(_numberToBeSorted);

// const sortedArrayRandomly = numberToBeSorted.sort(() => {
//   return 0.5 - Math.random();
// });

// console.log(sortedArrayRandomly);

// function sortArray() {
//   for (let i = numberToBeSorted.length - 1; i > 0; i--) {
//     // console.log(i);
//     // const check = Math.floor(2.4);
//     // console.log(check);
//     let j = Math.floor(Math.random() * (i + 1));
//     // console.log(j);
//     let k = numberToBeSorted[i];
//     // console.log(k);
//     numberToBeSorted[i] = numberToBeSorted[j];
//     // console.log(points[i]);
//     numberToBeSorted[j] = k;
//     // console.log(points[j]);
//   }
//   return numberToBeSorted;
// }

// const getSortArray = sortArray(numberToBeSorted);
// console.log(getSortArray);

// //case
// const years = [1991, 1990, 2007, 2008, 2009, 1969, 2022];
// const ages = [];

// const getArrayFunc = () => {
//   for (let i = 0; i < years.length; i++) {
//     // console.log(i);
//     // console.log(years[i] );
//     ages.push(2037 - years[i]);
//   }
//   console.log({ ages });
// };

// getArrayFunc();

//exercise
//using javascript function, loop through the values of this array and multiply it by 2 and push it into a new array.

// const evenNumber = [24, 44, 68, 96, 32, 10];
// const doubledEvenNumber = [];

// const getDoubledEvenNumber = () => {
//   for (let i = 0; i < evenNumber.length; i++) {
//     const element = evenNumber[i];
//     //   console.log(element);
//     doubledEvenNumber.push(element * 2);
//   }
//   console.log(doubledEvenNumber);
// };

// getDoubledEvenNumber();

// //Using the for each loop
// const _loopNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const _loop = [];
// _loopNumber.forEach(function (number) {
//   //   console.log(number);
//   _loop.push(50 - number);
// });

// console.log({ _loop });

//Javascript object
//using the javascript object literal syntax
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   hobbies: ["coding", "music", "reading"],
//   job: "student",
//   friends: ["Smith", "Steven", "Gary"],
// };

// console.log(person);
// console.log(person.age);
// console.log(person["firstName"]);
// console.log(person.firstName, person.lastName);
// console.log(person.firstName);
// console.log(person.friends);

// person.location = "Nigeria";
// person["twitter"] = "http://twitter.com/person";
// console.log(person);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   hobbies: ["coding", "music", "reading"],
//   job: "student",
//   friends: ["Smith", "Steven", "Gary"],
// };
//use the variable above to output this statement
//John is a 30years old student. John has 3 friends. John's best friend is Smith. John's hobbies are coding, music and reading.

// console.log(
//   `${person.firstName} is a ${person.age}years old ${person.job}. ${person.firstName} has ${person.friends.length} friends. ${person.firstName}'s best friend is ${person.friends[0]}. ${person.firstName}'s hobbies are ${person.hobbies}.`
// );

// object method
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   loan: 50,
//   interest: 0.1,
//   hasMortgage: false,
//   hobbies: ["coding", "music", "reading"],
//   job: "student",
//   friends: ["Smith", "Steven", "Gary"],
//   calcLoan: function () {
//     console.log(this);
//     return `${this.firstName} is a ${this.age}years old ${this.job}. ${this.firstName} has ${this.friends.length} friends. ${this.firstName}'s best friend is ${this.friends[0]}. ${this.firstName}'s hobbies are ${this.hobbies}.`;
//   },
// };

// console.log(person.calcLoan());

//write this statement using the function expression in the object.
//John at age 30 is owning $50 loan and as well has no mortgage.

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   loan: 50,
//   interest: 0.1,
//   hasMortgage: false,
//   hobbies: ["coding", "music", "reading"],
//   job: "student",
//   friends: ["Smith", "Steven", "Gary"],
//   calcLoan: function () {
//     return `${this.firstName} at age ${this.age} is owing $${
//       this.loan
//     } and as well as has ${this.hasMortgage ? "a" : "no"} mortgage`;
//   },
// };

// console.log(person.calcLoan());

//Exercise
//1. using javascript function, write a program that returns the sum of all the numbers from 1 to 100;

// function getSum() {
//   var sum = 0;
//   for (let i = 1; i <= 100; i++) {
//     // console.log(i);
//     sum += i;
//   }
//   console.log(sum);
// }

// getSum();

//2. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//Test Data: 'the quick brown fox jumped over the lazy dog'

// function getUpperCase() {
//   const str = "the quick brown big fox jumped over the lazy dog";

//   //convert string to an array
//   var upperCase = str.split(" ");
//   //   console.log(upperCase);
//   const _upperCase = [];
//   for (let i = 0; i < upperCase.length; i++) {
//     // console.log(upperCase[i]);

//     const _strCharacter = upperCase[i].charAt(0).toUpperCase();
//     // console.log(_strCharacter);

//     const _firstChar = _strCharacter + upperCase[i].slice(1);
//     _upperCase.push(_firstChar);
//   }
//   return _upperCase.join(" ");
// }
// const result = getUpperCase();
// console.log(result);

//displaying output as table in the console.
// const dailyMeals = [
//   { id: 1, name: "eba", stew: "ila" },
//   { id: 2, name: "semo", stew: "ewedu" },
//   { id: 3, name: "pounded-yam", stew: "vegetable" },
// ];

// console.table(dailyMeals);

//looping through an object

// const dailyMeals = {
//   swallow: "Pounded Yam",
//   grilled: "grilled Yam",
//   cooked: "cooked Yam",
//   fried: "Fried Rice",
//   dried: "Dried Rice",
//   baked: "Baked Rice",
//   chicken: "Chicken Rice",
// };
// // console.log(dailyMeals);
// // //Using the for-of-loop

// for (const key of Object.keys(dailyMeals)) {
//   const result = key;
//   //   console.log(result);
//   //   console.log(key);
//   //   console.log(dailyMeals[key]);
// }
//getting the values of the object

// const values = Object.values(dailyMeals);

// console.log(values);

//using entries to get all the entries in an object

// const entries = Object.entries(dailyMeals);

// console.log(entries);

//looping through all the entries
// for (const entry of entries) {
//   //   console.log(entry);
// }

//using the for-in loop
// for (key in dailyMeals) {
//   // console.log(key);
//   console.log(dailyMeals[key]);
// } // get the object keys

//using the for-in-loop to get the values from an object
// for (food in dailyMeals) {
// //   console.log(dailyMeals[food]);
// }

//converting an object to string
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// let personString = JSON.stringify(person);
// console.log(typeof personString);

// const date = new Date();
// console.log(date);
// const year = date.getFullYear();
// console.log(year);

//converts dates into strings
// const person = {
//   name: "John",
//   today: new Date(),
// };

// let myString = JSON.stringify(person);
// // console.log(person);
// console.log(myString);

//converting function to string
//stringify will not convert function to string
// const person = {
//   name: "John",
//   age: function () {
//     return 30;
//   },
// };

//to fix the stringify loophole, convert function to string first before stringifying
// person.age = person.age.toString();

// let myString = JSON.stringify(person);
// console.log(myString);

//convert array in an object to a string
// const arr = ["John", "Peter", "Sally", "Jane"];

// let myString = JSON.stringify(arr);
// console.log(myString);

//using getter
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "en",
//   get lang() {
//     return this.firstName;
//   },
// };

// console.log(person.lang);

//using setter
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "",
//   set lang(lang) {
//     this.firstName = lang;
//   },
// };

// // // Set an object property using a setter:
// person.lang = "James";
// console.log(person.firstName);

//difference between getter and function expression

//using function
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return ` ${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(person.fullName());

//using getter
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   get fullName() {
//     return ` ${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(person.fullName);

//Javascript class
// class Polygon {
//   constructor(name) {
//     this.name = "Shola";
//   }
// }

// //to make instance of Polygon
// const poly1 = new Polygon();

// console.log(poly1.name); // Expected output: "Shola"

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

// const myCar1 = new Car("Ford", 2014);
// const myCar2 = new Car("Audi", 2019);
// const myCar3 = new Car("Lexus", 2018);
// const myCar4 = new Car("Camry", 2016);

// console.log(myCar1);
// console.log(myCar2);
// console.log(myCar3);
// console.log(myCar4);

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   introduce() {
//     console.log(`Hello, my name is ${this.name}.`);
//   }
// }

// const firstName = new Person("Zayd");

// firstName.introduce(); // Hello, my name is Zayd

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     const date = new Date();
//     const getYear = date.getFullYear() - this.year;
//     return getYear;
//   }
// }
// const myCar = new Car("Ford", 2014);
// console.log(`My Car is ${myCar.age()} years old.`);
// myCar.age();

// //class inheritance
// class Car {
//   constructor(brand) {
//     this.brand = brand;
//   }
//   present() {
//     return `I have a ${this.brand} car`;
//   }
// }

// class Model extends Car {
//   constructor(brand, model) {
//     super(brand);
//     this.model = model;
//   }
//   show() {
//     return `${this.present()}, it is a  ${this.model} model.`;
//   }
// }

// let myCar = new Model("Ford", 2016);
// console.log(myCar.show());

//javascript DOM

// let value;

//to get the document properties
// value = document;

// //accessing the document collection in array
// value = document.all;
// value = document.all[1];
// value = document.all[2];
// value = document.all[3];

// //getting the length all the elements in the collection
// value = document.all.length;

// //accessing the head only
// value = document.head;
// value = document.body;

// //accessing the body only

// value = document.body;

// //get the domain
// value = document.domain;

// //get the url
// value = document.URL;

// //getting the document elements one by one
// value = document.forms;
// // value = document.forms[0];
// value = document.forms[0].action;
// value = document.forms[0].method;
// value = document.links;

// //get attribute

// value = document.scripts;
// value = document.scripts[0].getAttribute("src");
// console.log(value);

// //DOM Selectors
// //using document.getElementById

// let form = document.getElementById("form");

// //get things from the element

// form = document.getElementById("form").id;
// form = document.getElementById("form").className;

// //change styling

// form = document.getElementById("form").style.backgroundColor = "#ccc";
// form = document.getElementById("form").style.padding = "30px";
// const liId = document.getElementById("orange");
// console.log(liId);
// form = document.getElementById("form").style.color = "blue";
// form = document.getElementById("form").style.border = "1px solid black";
// form = document.getElementById("form").style.borderRadius = "15px";
// // form = document.getElementById("form").style.padding = "10px";
// form = document.getElementById("form").style.margin = "10px";
// form = document.getElementById("form").style.display = "none";

// // change text content
// form = document.getElementById("name").textContent = "Contact Name:";
// form = document.getElementById("name").innerText = "Your Name:";
// form = document.getElementById("name").innerHTML = "<span>Hello there!</span>";

// // using querySelector
// form = document.querySelector("label").textContent = "Contact Name:";
// form = document.querySelector("#name").innerText = "Your Name:";
// form = document.querySelector(".email-input").innerHTML =
//   "<span style='background-color:'#111111''>Your Email!</span>";

// // using multiple selector
// // by using getElementByClassName

// form = document.getElementsByClassName("email-input");

// // using getElementByTagName
// form = document.getElementsByTagName("input")[0].style.padding = "10px";
// form = document.getElementsByTagName("input")[0].style.width = "60%";

// form = document.querySelectorAll("label");
// form = document.querySelectorAll("#name");
// form = document.querySelectorAll(".email-input");

// const items = document.querySelectorAll("li");
// console.log(items);

// items.forEach((item, index) => {
//   item.textContent = `${index}: Hello World`;
// });
// const itemsOdd = document.querySelectorAll("li:nth-child(odd)");
// const itemsEven = document.querySelectorAll("li:nth-child(even)");

// itemsOdd.forEach((item) => {
//   //   item.style.backgroundColor = "#ccc";
// });
// itemsEven.forEach((item) => {
//   item.style.backgroundColor = "black";
//   item.style.color = "white";
// });

// // console.log(form);

//javascript events

// const button = document.querySelector("#button");
// const emailInput = document.querySelector(".email-input");
// const formContainer = document.querySelector(".form-container");
// const login = document.querySelector("#login");

// emailInput.addEventListener("keydown", emailChange);

// function emailChange(e) {
//   console.log(e.target.value);
// }

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   let value = e;
//   console.log(value);
//   // console.log("Hello World!");
//   // alert("Welcome back");
//   emailInput.style.backgroundColor = "red";
//   formContainer.style.backgroundColor = "brown";
// });
// button.addEventListener("mouseover", (e) => {
//   e.preventDefault();
//   // console.log("Hello World!");
//   // alert("Welcome back");
//   // emailInput.style.backgroundColor = "red";
//   // formContainer.style.backgroundColor = "brown";

//   // formContainer.innerHTML = "<h1>Register</h1>";
//   login.innerHTML = "<h1>Login</h1>";
//   login.style.display = "block";
//   login.style.fontSize = "15px";
//   login.style.color = "blueviolet";
// });


// const day = {
// monday:{
//     open: 2,
//     close: 3
// },
// tuesday:{
//     open: 4,
//     close: 5 
// }
// }

// const {monday, tuesday} = day;
// console.log(monday, tuesday)

// console.log(window)




