//  1. Start with an array of numbers and compute the sum of all the numbers.
//     For example, [5, 10, 8, 3] becomes 26.

// var numbers = [5, 10, 8, 3];
// var sum = 0;

// numbers.forEach(function(number) {
//   sum += number;
// });
// console.log(sum);

//  2. Start with an array of strings and combine them all into a single string.
//     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

// var words = ["volleyball", "basketball", "badminton"];
// var together = "";

// words.forEach(function(word) {
//   together += word;
// });
// console.log(together);

//  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

// var products = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
// var sum = 0;

// products.forEach(function(product) {
//   sum += product.price;
// });
// console.log(sum);

//  4. Start with an array of numbers and compute the the minumum number.
//     For example, [5, 10, 8, 3, 9] becomes 3.

// var numbers = [5, 10, 1, 8, 3, 9];
// var min = numbers[0];

// numbers.forEach(function(number) {
//   if (number < min) {
//     min = number;
//   }
// });
// console.log(min);

//  5. Start with an array of strings and compute the total length of all the strings.
//     For example, ["volleyball", "basketball", "badminton"] becomes 29.

// var strings = ["volleyball", "basketball", "badminton"];
// var totalLength = 0;

// strings.forEach(function(string) {
//   totalLength += string.length;
// });
// console.log(totalLength);

//  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

// var products = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 0.5}];
// var cheapestProduct = products[0];

// products.forEach(function(product) {
//   if (product.price < cheapestProduct.price) {
//     cheapestProduct = product;
//   }
// });
// console.log(cheapestProduct);

//  7. Start with an array of numbers and compute product of all the numbers.
//     For example, [5, 10, 8, 3] becomes 1200.

// var numbers = [5, 10, 8, 3]; 
// var product = 1;

// numbers.forEach(function(number) {
//   product *= number;
// });
// console.log(product);

//  8. Start with an array of strings and combine them all into a single string, separated by dashes.
//     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

// var words = ["volleyball", "basketball", "badminton"];
// var string = "-";

// words.forEach(function(word) {
//   string += word + "-";
// });
// console.log(string);

//  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

// var products = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
// var shortest = products[0];

// products.forEach(function(product) {
//   if (product.name.length < shortest.name.length) {
//     shortest = product;
//   }
// });
// console.log(shortest);

// 10. Start with an array of numbers and compute the maximum number.
//     For example, [5, 10, 8, 3] becomes 10.

// var numbers = [5, 10, 8, 3, 11];
// var max = numbers[0];

// numbers.forEach(function(number) {
//   if (number > max) {
//     max = number;
//   }
// });
// console.log(max);

// SOLUTIONS (using while loop): https://gist.github.com/peterxjang/376c8931a48549889eb3c9bc091e9f43
// SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/379c9945774f51027750c59d6e4395df
// SOLUTIONS (using .reduce shortcut): https://gist.github.com/peterxjang/b69183e2d555964ce3936893f423ef35