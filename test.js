// const lowerNumber = 50;
// const higherNumber = 70;

// for (let i = lowerNumber; i <= higherNumber; i++) {
//   let flag = 0;

//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       flag = 1;
//       break;
//     }
//   }

//   if (i > 1 && flag == 0) {
//     console.log(i);
//   }
// }

//Given two positive integers a and b, return the number of common factors of a and b.

//An integer x is a common factor of a and b if x divides both a and b.

let a = 25;
let b = 75;

// function commonFactor() {
//   for (let i = 7; i >= 0; i--) {
//     console.log(i);
//   }
// }

// // commonFactor();
// function commonFactor(a, b) {
//   for (let i = 0; i <= 100; i++) {
//     // console.log(i);
//     // console.log(a);
//     if (a % 2 === 0 && b % 2 === 0) {
//       return;
//     }
//   }
// }

// const result = commonFactor(25, 75);
// console.log(result);

function isFactor(num, fact) {
  if (num % fact == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isFactor(75, 5));

/* List all the factors of a number */
// function listFactors(number) {
//   factors = [1];
//   var i = 2;
//   while (i <= number) {
//     if (isFactor(number, i)) {
//       factors.unshift(i);
//     }
//     i++;
//   }
//   return factors;
// }

// var toTest = 1;

/* Find the GCF (greatest common factor) of the numbers in an array */
// function GCF(intList) {
//   var GCF = 1;
//   var factorsOfEach = [];
//   for (item in intList) {
//     var num = intList[item];
//     var factors = listFactors(num);
//     factorsOfEach.push(factors);
//   }
//   var count = 0;
//   factorsOfFirst = factorsOfEach[0];
//   var length = factorsOfFirst.length;
//   while (count < length) {
//     var toTest = factorsOfFirst[count];
//     var passTest = factorsOfEach.every(arrayContains);
//     if (passTest) {
//       GCF = toTest;
//       return GCF;
//     } else {
//       count += 1;
//     }
//   }
//   return GCF;
// }

// const answer = GCF([35, 45, 100]);
// console.log(answer);

/* Check whether an array contains the variable "toTest" */
function arrayContains(array) {
  if (array.indexOf(toTest) != -1) {
    return true;
  } else {
    return false;
  }
}
