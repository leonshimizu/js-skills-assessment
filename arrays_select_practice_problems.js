//  1. Start with an array of numbers and create a new array with only the numbers less than 20.
//     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

// var numbers = [2, 32, 80, 18, 12, 3, 5, 20, 3];
// var lessThan20 = [];

// numbers.forEach(function(number) {
//   if (number < 20) {
//     lessThan20.push(number);
//   }
// });
// console.log(lessThan20);

//  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
//     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

// var strings = ["winner", "winner", "chicken", "dinner"];
// var w = [];

// strings.forEach(function(string) {
//   if (string[0].toLowerCase() === "w") {
//     w.push(string);
//   }
// });
// console.log(w);

//  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

// var products = [{name: "chair", price: 100}, {name: "pencil", price: 6}, {name: "book", price: 4}];
// var cheapProducts = [];

// products.forEach(function(product) {
//   if (product.price > 5) {
//     cheapProducts.push(product);
//   }
// });
// console.log(cheapProducts);

//  4. Start with an array of numbers and create a new array with only the even numbers.
//     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

// var numbers = [2, 4, 5, 1, 8, 9, 7, 10, 5, 3];
// var evenNumbers = [];

// numbers.forEach(function(number) {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });
// console.log(evenNumbers);

//  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
//     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

// var words = ["a", "man", "a", "plan", "a", "canal", "panama"];
// var lessThan4 = [];

// words.forEach(function(word) {
//   if (word.length < 4) {
//     lessThan4.push(word);
//   }
// });
// console.log(lessThan4);

//  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

// var products = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
// var shorterThan6 = [];

// products.forEach(function(product) {
//   if (product.name.length < 6) {
//     shorterThan6.push(product);
//   }
// });
// console.log(shorterThan6);

//  7. Start with an array of numbers and create a new array with only the numbers less than 10.
//     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

// var numbers = [8, 23, 0, 44, 1980, 3];
// var lessThan10 = [];

// numbers.forEach(function(number) {
//   if (number < 10) {
//     lessThan10.push(number);
//   }
// });
// console.log(lessThan10);

//  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
//     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

// var words = ["big", "little", "good", "bad"];
// var anyLetterButB = [];

// words.forEach(function(word) {
//   if (word[0].toLowerCase() !== 'b') {
//     anyLetterButB.push(word);
//   }
// });
// console.log(anyLetterButB);

//  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

// var products = [{name: "chair", price: 9}, {name: "pencil", price: 10}, {name: "book", price: 4}];
// var priceLessThan10 = [];

// products.forEach(function(product) {
//   if (product.price < 10) {
//     priceLessThan10.push(product);
//   }
// });
// console.log(priceLessThan10);

// 10. Start with an array of numbers and create a new array with only the odd numbers.
//     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

// var numbers = [2, 4, 5, 1, 8, 9, 7];
// var oddNumbers = [];

// numbers.forEach(function(number) {
//   if (number % 2 === 1) {
//     oddNumbers.push(number);
//   }
// });
// console.log(oddNumbers);

// SOLUTIONS (using while loop): https://gist.github.com/peterxjang/7de16ed43ea506e98df3fa15074b84f8
// SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/a702894841c7018ed8c127b647ae21f8
// SOLUTIONS (using .select shortcut): https://gist.github.com/peterxjang/b8c8fb8b77b2cae7bb9cc62a3a434761