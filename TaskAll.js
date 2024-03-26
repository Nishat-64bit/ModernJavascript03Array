

///* Task 1 :
// Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

const FruitsName = ["mango", "pineapple", "jackfruits", "banana", "orange"]
console.log(FruitsName[3]);
FruitsName[2] = "jambura"
console.log(FruitsName);
/// Task 1 End ///

/// Task 2 : Add or remove elements  <start> ///

// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

const distination = ['coxsbazar', 'rangamati',"bandorban"]
distination.push("hatia")
distination.push("kuakata", "norshindi")
distination.pop()
console.log(distination);

/// Task 2 : Add or remove elements  <End> ///

/// Task 3 :  Checking Array Membership with ‘includes’ <Start> ///

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.

const Books = ['bangla','english', "religion", 'math', 'science']
console.log(Books.includes("Javascript"));
if (Books.includes("Javascript")){
    console.log("yes, the book is present in arry ");
}else{
    console.log("No, the book is absent in array")
}
/// Task 3 : Checking Array Membership with ‘includes’  <End> ///
/// Task 4 : Checking if it's an Array  <Start> ///

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

const age = 25;
const height = []
const names = ["a","b","c"]
// console.log(Array.isArray(age)); // false // just aemne liksi mone rakar jonno 
// console.log(Array.isArray(height)); // true // just aemne liksi mone rakar jonno 
// console.log(Array.isArray(names)); // false // just aemne liksi mone rakar jonno 

if (Array.isArray(age)){
    console.log("its an array")
}else{
    console.log("its not an array");
}

if (Array.isArray(height)){
    console.log("its an array")
}else{
    console.log("its not an array");
}

if (Array.isArray(names)){
    console.log("its an array")
}else{
    console.log("its not an array");
}
/// Task 4 : Checking if it's an Array  <End> ///

/// Task 5 : Combining Arrays  <Start> ///

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().
// const perfumes = ['sweet','hot']
const fruits = ["mango","jackfruits"]
const combine = perfumes.concat(fruits)
console.log(perfumes);
console.log(fruits);
console.log(combine);
/// Task 5 : Combining Arrays  <End> ///