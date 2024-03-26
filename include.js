
/// * includes detitecs whether a element is have or not , if yes , it shows true , else false 
//* we can use it using if else condition ,
//* includes crates boolean values like true or false
// * includes caseSensative
//? use arrayname.includes(desired number/string/boolean)
const numbers = [1, 25, 85, 65, 95]
console.log(numbers.includes(85));

if (numbers.includes(75)){ // we can use includes using this method
    console.log("we can eat food");
}else {
    console.log("we are fasting");
}


///* index of ---- we find the index number of this method

const numbers = [1, 25, 85, 65, 95]
console.log(numbers.indexOf(65));

/// but what happens when any element is not there 
console.log(numbers.indexOf("salam")) // if element is not there , than shows -1