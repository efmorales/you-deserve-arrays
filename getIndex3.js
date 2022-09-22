/*
3. Write a program `getIndex3.js` that prompts the user for an array then logs out the item at the 3rd index. If there are not four items (i.e., if there is no index 3), it logs out the value at the last index
*/

const prompt = require('prompt-sync')({sigint: true});

let array1 = JSON.parse(prompt(`Please, create an array: `))

console.log (`The current array has ${array1.length} items!`)

if (array1.length < 3){
console.log(array1[array1.length-1])
} else {
    console.log(array1[2])
}
