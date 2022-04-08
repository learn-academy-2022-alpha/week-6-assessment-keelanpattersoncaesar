// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// describe("functionName", () => {
//   it("does something", () => {
//     expect(functionName(parameter)).toEqual("exact output")
//   })
// })


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

// ----------------------------------------------------------------------------------------------------


describe("jobPlusName", () => {
  
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {

    expect(jobPlusName(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// ReferenceError: jobPlusName is not defined, good fail

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// PSEUDOCODE:
// create function named jobPlusName
  // takes in an array (of objects)
// REMEMBER to use array.name or array.occupation to access those values
// create a container called newArray = []
// iterate through the array of objects
  // for each name, separate the first and last name
    // capitalize the FIRST LETTER of both the first and last name 
      // concatenate them together again
  // occupation just needs to be concatenated with + "."
  // .push() all the pieces to make a sentence
    // example: "Ford Prefect is a hitchhiker." etc etc
      // use the container (newArray)
// return the container

const jobPlusName = (array) => {
  let newArray = []; // <---- container for final output
  for (let i = 0; i < array.length; i++) { // <---- iteration through array of objects
    let firstName = array[i].name.split(" ")[0]; // <---- First name using .split(" ")
    let lastName = array[i].name.split(" ")[1]; // <---- same thing, but with Last name
    let firstLetter = firstName.charAt(0).toUpperCase(); // <---- Capitalizing only the first letter of the FIRST name
    let lastLetter = lastName.charAt(0).toUpperCase(); // <---- Capitalizing only the first letter of the LAST name
    let newName = firstLetter + firstName.slice(1) + " " + lastLetter + lastName.slice(1); // <--- putting it all back together to make a capitalized name!
    newArray.push(newName + " is " + array[i].occupation + "."); // <---- finally using the container and creating a sentence, all at once
  }
  return newArray; // <---- returning the container's values
}

console.log(jobPlusName(people))

// Result:
// console.log
//     ford
//       at jobPlusName (code-challenges.test.js:68:13)

//     prefect
//       at jobPlusName (code-challenges.test.js:70:13)

//     F
//       at jobPlusName (code-challenges.test.js:72:13)

//     P
//       at jobPlusName (code-challenges.test.js:74:13)

//     Ford Prefect
//       at jobPlusName (code-challenges.test.js:76:13)
      
// (It iterates through the rest of the array...)

//       [
//         'Ford Prefect is a hitchhiker.',
//         'Zaphod Beeblebrox is president of the galaxy.',
//         'Arthur Dent is a radio employee.'
//       ]

// WHAT I LEARNED: Console.log() is your friend. I used it on almost every line (I deleted them all to make it more readable) so I could track exactly what was happening and where. This problem took me the longest to figure out so, I left it for last. 



// ----------------------------------------------------------------------------------------------------



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("numRem", () => {

  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];

  it(" takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(numRem(hodgepodge1)).toEqual([2, 0, -1, 0]);
    expect(numRem(hodgepodge2)).toEqual([2, 1, -1]);
  });
});

// ReferenceError: remainingRemainders is not defined; good fail!

// b) Create the function that makes the test pass.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
// Expected output: [ 2, 1, -1 ]

// PSEUDOCODE:
//  create function
// takes in an array as parameter
// if statement to iterate through array
// conditional to check if [i] is a number
// if not, arr.splice(i, 1) <---- remove the index if the condition is not met
// now we have an array of numbers
// iterate through array again? (maybe)
// perform arr[i] = arr[i] % 3
// return arr


// FIRST ATTEMPT (USING .SPLICE())
// const numRem = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     //iteration through array
//     if (typeof array[i] !== "number") {
//       // console.log(`${array[i]} is not a number`); // <----- console.logs "... is not a number" for all values that are not numbers
//       array.splice(i, 1);  // ...get rid of it
//       console.log(array); // <----- console.logs the array without the deleted values
//     } else {
//       console.log(`${array[i]} is a number!`)
//       console.log(array); // <----- console.logs the array with the numbers
//       // if it is a number...
//       array[i] = array[i] % 3; // modulo 3 to all remaining values
//     }
//   }
//   return array; // result
// };


// What I learned: .splice() changes the original array. This means that when you take an index out, the next number becomes that index position. So if you take out the first index, the second number becomes the first index. This was causing .splice() to 'skip' certain values, based on whether the test passed or not.


// SECOND ATTEMPT (USING .FILTER())
const numRem = (array) => {
  const newArray = array.filter((value) => typeof value === "number"); // <----- filter out all values that are not numbers
  const result = newArray.map((value) => value % 3); // <----- map through the new array and modulo 3
  // console.log(result); // <----- console.loggin
  return result; // <----- return the result
};

console.log(numRem(hodgepodge1));
console.log(numRem(hodgepodge2));

// RESULT:
// console.log
// [ 2, 0, -1, 0 ]
// at numRem (code-challenges.test.js:93:11)

// [ 2, 1, -1 ]
// at numRem (code-challenges.test.js:93:11)

// What I learned: .filter() creates a new array, and .map() creates a new array. They do not change the original array, which makes iteration easier (and it hits all index positions too!).


// ----------------------------------------------------------------------------------------------------


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubeSummer", () => {

  const cubeAndSum1 = [2, 3, 4];
  const cubeAndSum2 = [0, 5, 10];

  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(cubeSumer(cubeAndSum1)).toEqual(99);
    expect(cubeSumer(cubeAndSum2)).toEqual(1125);
  });
});

// ReferenceError: cubeSummer is not defined; good fail :)

// b) Create the function that makes the test pass.

// PSEUDOCODE:
// NOTE: the problem is asking to cube each number FIRST, then add them all up
  // EXAMPLE: (2 * 2 * 2) + (3 * 3 * 3) + (4 * 4 * 4) = 99
// create function called cubeSumer
  // takes in an array
// create a variable called sum 
// iterate through array with .map()
  // cube each value with i ** 3
    // array.map((value) => value ** 3)
// add all values with array.reduce((previousValue, currentValue) => previousValue + currentValue, sum variable)
  // .reduce() passes the return value to the next index   
// return sum

const cubeAndSum1 = [2, 3, 4];
const cubeAndSum2 = [0, 5, 10];

// FIRST ATTEMPT

// const cubeSumer = (array) => {
//   let sum = array.map((value) => value ** 3).reduce((previousValue, currentValue) => previousValue + currentValue); // <----- multiple steps here, in one line; first, I use .map() to cube each value with arrow function. Then I use .reduce() to add all the values together. The syntax for .reduce() is: "array.reduce((previousValue, currentValue) => previousValue + currentValue)" . This adds the whole array together and returns a single number.
//   console.log(sum) // <----- console.loggin so I can see the magic
//   return sum;
// }


// SECOND ATTEMPT
// This is the same code as my first attempt, but it shows how you can do the same thing on multiple lines. I think it's more readable this way. Both work just fine, though.

const cubeSumer = (array) => {
  let sum = array.map((value) => value ** 3) // <---- cube each value with i ** 3
  let sum2 = sum.reduce((previousValue, currentValue) => previousValue + currentValue); // <--- add all values with .reduce()
  // console.log(sum2) // <----- console.loggin 
  return sum2;
}

console.log(cubeSumer(cubeAndSum1));
console.log(cubeSumer(cubeAndSum2));

// RESULT:
// console.log

// 99
// at cubeSumer (code-challenges.test.js:145:11)

// 1125
// at cubeSumer (code-challenges.test.js:145:11)

// What I learned: You can chain multiple arrow functions together. Originally, I planned to separate the .map() and .reduce() into separate functions. Also, console.log() is amazing because it allows you to see what is happening and where. I also learned to STOP using return prematurely. That has been tripping me up for a while now.