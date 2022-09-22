/*
4. `isLongList.js`: prompts the user for an array then logs out a boolean indicating whether the array's length is at least 10
*/

const prompt = require('prompt-sync')({sigint: true});

let array1 = JSON.parse(prompt(`Please, create an array: `))

let arrayLength = array1.length

console.log(arrayLength)

if (arrayLength >= 10) {
    console.log(`The length of the array is equal or bigger than 10!`)
} else {
    console.log (`The length of the array is less than 10!`)
}


// if (arrayLength < 10) {
//     bool = true
// } else if (arrayLength >= 10) {
//     bool = false
// }

// if(bool = true) {
//     console.log(`The array length is smaller than 10!`)
// } else if (bool = false) {
//     console.log(`The array length is bigger than 10!`)
// }

// let arraySmall = arrayLength < 10

// if (arraySmall = true){
//     console.log(`The array length is smaller than 10!`)
// } else if (arraySmall = false) {
//     console.log(`The array length is bigger than 10!`)
// }
