//1. write a javascript function that reverse the below variable.
//Test data: const number = 12345;

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

//4. using javascript function, write a program that returns the sum of all the numbers from 1 to 100;

// function getSum() {
//   var sum = 0;
//   for (let i = 1; i <= 100; i++) {
//     // console.log(i);
//     sum += i;
//     console.log(sum);
//   }
// }

// getSum();

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
//     // console.log(years[i]);
//     ages.push(2037 - years[i]);
//   }
//   console.log({ ages });
// };

// getArrayFunc();

// //Using the for each loop
// const _loopNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const _loop = [];
// _loopNumber.forEach((number) => _loop.push(50 - number));

// console.log({ _loop });

//Javascript object
