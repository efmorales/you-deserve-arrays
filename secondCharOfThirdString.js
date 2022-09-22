/*
6. `secondCharOfThirdString.js`: prompts the user for an array then logs the second character in the third item in the array. If the third item is not a string, log an error instead
*/

const prompt = require('prompt-sync')({sigint: true});

array1 = JSON.parse(prompt(`Please create an array!: `));

array2 = array1[2];

console.log(array2)

if (typeof array2 === "string") {
    console.log (array2.substring(1,2))
} else if (typeof array2 === "number") {
    console.log (`ERROR! This is not a string!`)
}
