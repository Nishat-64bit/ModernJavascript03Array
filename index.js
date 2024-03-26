
// * index means serail in array ,
// * genereally it start from 0 ,

// const numbers = [11, 22, 33, 55, 78, 59] // index start from 0 , that means 
// 0 index >>>>> 11,
// 1 index >>>>> 22,
// 2 index >>>>> 33,
// 3 index >>>>> 55,
// 4 index >>>>> 78,
// 5 index >>>>> 59,

// * if we want to know the index2 result in console 
// ? use arrayname[indexNumber]
// console.log(numbers[3])

// * we can use indexnumber to store a variable
const numbers = [11, 22, 33, 55, 78, 59]

// ! get element by index 
let fifth = numbers[4] // ? we can access any variable using get/var method 
console.log(fifth);

// ! set or update element by index
numbers[0] =25;
console.log(numbers);
numbers[5] = 999999;
console.log(numbers);

numbers[6] = 457884; /// we can add element even if there is no exist 
console.log(numbers);

