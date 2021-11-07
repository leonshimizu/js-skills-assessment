// 1. Convert an array of arrays into a hash.
//    For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

// var array = [[1, 3], [8, 9], [2, 16]];
// var hash = {};

// for (var i = 0; i < array.length; i++) {
//   // console.log(array[i]);
//   var numbers = array[i];
//   var key = numbers[0];
//   var value = numbers[1];
//   hash[key] = value;
// }
// console.log(hash);

// 2. Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
//    For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

// var array = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}];
// var hash = {};
// for (var i = 0; i < array.length; i++) {
//   hash[array[i].id] = array[i];
// }
// console.log(hash);

// 3. Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
//    For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

// var string = "bookkeeper";
// var hash = {};

// for (var i = 0; i < string.length; i++) {
//   var letter = string[i];
//   if (hash[letter] === undefined) {
//     hash[letter] = 0;
//   }
//   hash[letter] += 1;
// }
// console.log(hash);

// 4. Convert a hash into an array of arrays.
//    For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

// var hash = {chair: 100, book: 14};
// var array = [];
// console.log(Object.entries(hash));

// 5. Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
//    For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

// var hash = {321: {name: "Alice", age: 31}, 322: {name: "Maria", age: 27}};
// var array = [];

// Object.entries(hash).forEach(function([id, person]) {
//   person.id = parseInt(id);
//   array.push(person);
// });
// console.log(array);

// console.log(Object.entries(hash));

// var n = 5;
// var s = "5";
// var nS = parseInt(s);
// console.log(n + nS);
// console.log(n);
// console.log(s);
// console.log(nS);

// 6. Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
//    For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

// var array = ["do", "or", "do", "not", "do", "maybe"];
// var hash = {};

// array.forEach(function(word) {
//   if (hash[word] === undefined) {
//     hash[word] = 0;
//   }
//   hash[word] += 1;
// });
// console.log(hash);

// 7. Convert a hash into a flat array containing all the hash’s keys and values.
//    For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

// var hash = {a: 1, b: 2, c: 3, d: 4};
// var array = [];

// Object.entries(hash).forEach(function([key, value]) {
//   array.push(key, value);
// });
// console.log(array);

// 8. Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
//    For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

// var hash = {chair: 75, book: 15};
// var array = [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}];
// var newHash = {};

// for (var i = 0; i < array.length; i++) {
//   var item = array[i];
//   var name = item.name;
//   var color = item.color;
//   var weight = item.weight;
//   var price = hash[name];
//   newHash[name] = {price: price, color: color, weight: weight};
// }
// console.log(newHash);

// 9. Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
//    For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.



// 10. Given a hash, create a new hash that has the keys and values switched.
//    For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.



//SOLUTIONS: https://gist.github.com/peterxjang/216a7a6e8411ee5c05118e78022f2bc7