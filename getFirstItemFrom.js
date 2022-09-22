/*
1. Write a program, `getFirstItemFrom.js` that prompts the user for an array, then logs out the first item in that array
*/

const prompt = require('prompt-sync')({sigint: true});

let array1 = JSON.parse(prompt(`Please create an array: `))

console.log(array1[0])