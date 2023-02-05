// find the duplicate numbers from the array

/*

1] assign some numbers in the array
2] to get the duplicate numbers , first i have to loop through the array of numbers by "array.filter"
3] then i have to find the indexs of the numbers by "array.indexOf"
[array.indexOf find the first index of an array]
4] once i'll get the index i'll then write logic to match the index with current index

*/

// const numbers = [1, 22, 33, 4, 5, 1, 2, 4, 22, 33, 4];

// const duplicate = numbers.filter(function (value, index, array) {
//   return array.indexOf(value) !== index;
// });

// console.log(duplicate);

// find how many times the specific word were used in a sentence

const sentence =
  "Hi, My name is Hasan Hafizur Rahman. I'm a varsity graduate. I've completed my study from Jagannath University. I have a good match with my name Hasan Hafizur Rahman";

const requiredWord = sentence.match(/Hasan Hafizur Rahman/gi);
console.log(requiredWord.length);
