/*
5. `firstItemIsNumber.js`: prompts the user for an array then logs out a boolean indicating whether or not the first item in the array is a number
*/

const prompt = require('prompt-sync')({sigint: true});

let array1 = JSON.parse(prompt(`Please, create an array: `))
let array2 = array1[0]
let array3 = (typeof array2)

console.log(array2)

if (array3 === "number"){
    console.log (`The first item in the array is a number!`)
} else {
    console.log (`The first item in the array is NOT a number`)
}