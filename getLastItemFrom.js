/*
2. Write a program, `getLastItemFrom.js` that prompts the user for an array, then logs out the last item from that array
*/

const prompt = require('prompt-sync')({sigint: true});

let array1 = JSON.parse(prompt(`Please create an array: `))

console.log(array1[array1.length-1])
