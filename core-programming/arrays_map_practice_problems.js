//  1. Start with an array of numbers and create a new array with each number times 3.
//     For example, [1, 2, 3] becomes [3, 6, 9].

// var n = [1, 2, 3];

// var numbers = n.map(function (number) {
//   return number * 3;
// });
// console.log(numbers);

// for (var i = 0; i < n.length; i++) {
//   n[i] *= 3;
// }
// console.log(n);

// n.forEach(function(number) { //does the multiplication but doesn't overwrite the original number
//   return number * 3;
// });
// console.log(n);

//  2. Start with an array of strings and create a new array with each string upcased.
//     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

// var strings = ["hello", "world"];

// for (var i = 0; i < strings.length; i++) {
//   strings[i] = strings[i].toUpperCase();
// }
// console.log(strings);

// strings.forEach(function(string) { // doesn't overwrite original
//   string = string.toUpperCase();
// });
// console.log(strings);

//  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
//     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

// var people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
// var names = [];

// for (var i = 0; i < people.length; i++) {
//   names.push(people[i].name);
// }
// console.log(names);

//  4. Start with an array of numbers and create a new array with each number plus 7.
//     For example, [1, 2, 3] becomes [8, 9, 10].

// var numbers = [1, 2, 3];

// numbers.forEach(function(number) { // doesn't overwrite original
//   number += 7;
// });
// console.log(numbers);

// for (var i = 0; i < numbers.length; i++) {
//   numbers[i] = numbers[i] + 7;
// }
// console.log(numbers);

//  5. Start with an array of strings and create a new array with each string's length.
//     For example, ["hello", "goodbye"] becomes [5, 7].

// var words = ["hello", "goodbye"];
// var lengths = [];

// for (var i = 0; i < words.length; i++) {
//   lengths.push(words[i].length);
// }
// console.log(lengths);

//  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
//     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

// var people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
// var names = [];

// for (var i = 0; i < people.length; i++) {
//   names.push(people[i].age);
// }
// console.log(names);

//  7. Start with an array of numbers and create a new array with each number divided by 2.
//     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

// var numbers = [1, 2, 3];

// for (var i = 0; i < numbers.length; i++) {
//   numbers[i] /= 2;
// }
// console.log(numbers);

//  8. Start with an array of strings and create a new array with each string's first letter only.
//     For example, ["hello", "goodbye"] becomes ["h", "g"].

// var words = ["hello", "world"];
// var firstLetter = [];

// words.forEach(function(word) {
//   firstLetter.push(word[0]);
// });
// console.log(firstLetter);

// 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
//     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// var people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
// var ageTimes2 = [];

// people.forEach(function(person) {
//   ageTimes2.push(person.age * 2);
// });
// console.log(ageTimes2);

// 10. Start with an array of numbers and create a new array with each number converted into a string.
//     For example, [1, 2, 3] becomes ["1", "2", "3"].

// var numbers = [1, 2, 3];
// console.log(numbers);

// for (var i = 0; i < numbers.length; i++) {
//   numbers[i] = numbers[i].toString();
// }
// console.log(numbers);

// SOLUTIONS (using while loop): https://gist.github.com/peterxjang/b9ac4390aad2301a2238efc95c904f3d
// SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/66598fd7cdbc67fe663624e217cebbaf
// SOLUTIONS (using .map shortcut): https://gist.github.com/peterxjang/23a8f8a51601e4288ba3a8aa6d1f1c98