// console.log(28);

// let a = 5;
// let b = 5;

// let c = a + b;

// console.log(c);

// const fruit = ["apple"];

// console.log(typeof fruit);

// console.log(true + false); // 1
// const a = [, , ,].length;

// console.log(a); // 3

// const numbers = [1, 2, 3] + [4, 5, 6];

// console.log(numbers); // 1,2,34,5,6

//let arr = [1,2,3,1,4,5,6,7,7,8,10]; Given an array of numbers, write a function that returns an array of all the duplicate numbers.

// const returnDuplicate = (numbers) => {
//   const duplicate = [];
//   const counted = {};

//   for (let i = 0; i < numbers.length; i++) {
//     if (!counted[numbers[i]]) {
//       counted[numbers[i]] = 1;
//     } else {
//       if (counted[numbers[i]] === 1) {
//         duplicate.push(numbers[i]);
//       }

//       counted[numbers[i]] += 1;
//     }
//   }
//   return duplicate;
// };

// const numbers = [1, 2, 3, 1, 4, 5, 6, 7, 7, 8, 10];
// const result = returnDuplicate(numbers);
// console.log(result);

// const findMissing = (numbers) => {
//   const min = Math.min(...numbers);
//   const max = Math.max(...numbers);
//   const missingNumber = [];

//   for (let i = min; i <= max; i++) {
//     if (!numbers.includes(i)) {
//       missingNumber.push(i);
//     }
//   }

//   return missingNumber;
// };

// const numbers = [1, 2, 3, 10];
// const result = findMissing(numbers);
// console.log(result);

//1. let arr = [1,2,3,4,5,6,7,8,10]; Given an array of numbers, write a function that returns an array of the missing numbers within the range.

//2.let arr = [1,2,3,1,4,5,6,7,7,8,10]; Given an array of numbers, write a function that returns an array of all the duplicate numbers.

// const returnMiss = function (arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);

//   const missing = [];

//   for (let i = min; i < max; i++) {
//     if (!arr.includes(i)) {
//       missing.push(i);
//     }
//   }

//   return missing;
// };

// const arr = [5, 6, 9];
// const result = returnMiss(arr);
// console.log(result);

// const returnDuplicates = function (arr) {
//   const duplicate = [];
//   const available = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (!available[arr[i]]) {
//       available[arr[i]] = 1;
//     } else {
//       if (available[arr[i]] === 1) {
//         duplicate.push(arr[i]);
//       }
//       available[arr[i]] += 1;
//     }
//   }

//   return duplicate;
// };

// const arr = [1, 2, 3, 4, 5, 6, 6];
// const result = returnDuplicates(arr);
// console.log(result);
