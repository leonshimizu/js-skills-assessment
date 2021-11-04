// 1. Use a nested loop to convert an array of number pairs into a single flattened array.
//    For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

// var nested = [[1, 3], [8, 9], [2, 16]];
// var regular = [];

// for (var i = 0; i < nested.length; i++) {
//   for (var j = 0; j < nested[i].length; j++) {
//     regular.push(nested[i][j]);
//   }
// }
// console.log(regular);

// 2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
//    For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

// var l1 = ["a", "b", "c"];
// var l2 = ["d", "e", "f", "g"];
// var combined = [];

// for (var i = 0; i < l1.length; i++) {
//   for (var j = 0; j < l2.length; j++) {
//     combined.push(l1[i] + l2[j]);
//   }
// }
// console.log(combined);

// 3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
//    For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

// var letters = ["a", "b", "c", "d", "e"];
// var combined = [];

// for (var i = 0; i < letters.length; i++) {
//   for (var j = 1; j < letters.length; j++) {
//     if (i !== j) {
//       combined.push(letters[i] + letters[j]);
//     }
//   }
// }
// console.log(combined);

// 4. Use a nested loop to find the largest product of any two different numbers within a given array.
//    For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

// var numbers = [5, -2, 1, -9, -7, 2, 6];
// var largest = numbers[0];

// for (var i = 0; i < numbers.length; i++) {
//   for (var j = 0; j < numbers.length; j++) {
//     if (i !== j) {
//       if (numbers[i] * numbers[j] > largest) {
//         largest = numbers[i] * numbers[j];
//       }
//     }
//   }
// }
// console.log(largest);

// 5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
//    For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

// var numbers = [[1, 3], [8, 9], [2, 16], [1, 0]];
// var sum = 0;

// numbers.forEach(function(number) {
//   number.forEach(function(n) {
//     sum += n;
//   });
// });
// console.log(sum);

// 6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
//    For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

// var n1 = [1, 2];
// var n2 = [6, 7, 8];
// var n3 = [];

// for (var i = 0; i < n1.length; i++) {
//   for (var j = 0; j < n2.length; j++) {
//     n3.push(n1[i] + n2[j]);
//   }
// }
// console.log(n3);

// 7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
//    For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

// var numbers = [2, 8, 3];
// var products = [];

// for (var i = 0; i < numbers.length; i++) {
//   for (var j = 0; j < numbers.length; j++) {
//     products.push(numbers[i] * numbers[j]);
//   }
// }
// console.log(products);

// 8. Use a nested loop to find the largest sum of any two different numbers within an array.
//    For example, [1, 8, 3, 10] becomes 18.

// var numbers = [1, 8, 3, 10, 20];
// var largest = numbers[0];

// for (var i = 0; i < numbers.length; i++) {
//   for (var j = 0; j < numbers.length; j++) {
//     if (i !== j) {
//       if (numbers[i] + numbers[j] > largest) {
//         largest = numbers[i] + numbers[j];
//       }
//     }
//   }
// }
// console.log(largest);

// 9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
//    For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

// var numbers = [5, 2, 5, 3, 1, 0, 7, 11];
// var equal10 = [];

// for (var i = 0; i < numbers.length; i++) {
//   for (var j = 0; j < numbers.length; j++) {
//     if (equal10.length === 2) {
//       break;
//     } else {
//       if (i !== j) {
//         if (numbers[i] + numbers[j] === 10) {
//           equal10.push(numbers[i], numbers[j]);
//         }
//       }
//     }
//   }
// }
// console.log(equal10);

// 10. Use a nested loop to convert an array of string arrays into a single string.
//    For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

// var array = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]];
// var string = "";

// array.forEach(function(words) {
//   words.forEach(function(word) {
//     string += word;
//   });
// });
// console.log(string);

// array.forEach(function(words) {
//   for (var i = 0; i < words.length; i++) {
//     string += words[i];
//   }
// });
// console.log(string);

//SOLUTIONS: https://gist.github.com/peterxjang/af8985dc4fb07ea14b4bd6ba41cb08f8