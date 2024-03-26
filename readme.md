        Know the intro of Array  <Start>
=================================================
// * intro of Array :<br>
// * stroring multiple collecetion in a single variable name <br>
// * Enabels storing a collection of multiple items in a single variable name.<br>
<br>
const numbers = [22, 32, 45, 65, 78] // use comma gap // Number Array <br>
const names = ['mokbo', "sikbo", "nishat", "raju"]  // String Array<br>
const passed = [true, false, true]// boolean array <br>
<br>
// * why its array important ?<br>
// ? if we dont use array for multiple items we need to use variable every time as we need . so this is<br> terrible .but important things is use number items in one array , string in one array , boolean in<br> one array dont mix it.<br>
<br>

        Know the intro of Array  <End>
============================================    

        Know the Array index, length <start>
============================================   
// * how much much element in a array how to measure ?<br>
// use .length propterty <br>

const number = [1, 2, 5, 9, 85, 58, 4, 6]<br>
console.log(number.length);// lengh mane total koyta element ase<br>
<br>



// * index means serail in array ,<br>
// * genereally it start from 0 ,<br>

// const numbers = [11, 22, 33, 55, 78, 59] // index start from 0 , that means <br>
// 0 index >>>>> 11,<br>
// 1 index >>>>> 22,<br>
// 2 index >>>>> 33,<br>
// 3 index >>>>> 55,<br>
// 4 index >>>>> 78,<br>
// 5 index >>>>> 59,<br>
<br>
// * if we want to know the index2 result in console <br>
// ? use arrayname[indexNumber]<br>
// console.log(numbers[3])<br>

// * we can use indexnumber to store a variable<br>
const numbers = [11, 22, 33, 55, 78, 59]<br>

// ! get element by index <br>
let fifth = numbers[4] // ? we can access any variable using get/var method <br>
console.log(fifth);<br>

// ! set or update element by index<br>
numbers[0] =25;<br>
console.log(numbers);<br>
numbers[5] = 999999;<br>
console.log(numbers);<br>

numbers[6] = 457884; /// we can add element even if there is no exist <br>
console.log(numbers);<br>

briefly length , index :<br>
======================================================
how to measure numbers of items in a array ?<br>
<br>


suppose let numbers = [ 1,2,3,4,5,6]<br>

console.log(numbers.length) // output : 6<br>

that means use variable name then dot and use length .<br>


index :<br>

let numbers = [ 1,2,3,4,5]<br>

usually all the programing language use index that means serial number is starting from o that means <br>oindex means 1 ,

1index means 2 ,<br>
<br>
3index 4 ,<br>

but again if u asked number2items is index 1<br>
<br>
Example how to use :<br>

let numbers = [88,89,52,75,74,65]<br>

console.log(numbers[3]) // output 3index means : 75.<br>



==============================================

use get index in a varaible :<br>

let numbers = [15,25,26,24,23,2334,45]<br>

let fourth = numbers[4]<br>

console.log (fourth) // output :23<br>


can setindex or update index value :<br>

let name = [amin , rahim,karim ,sabir ]<br>
<br>
name[2] = 25;<br>

console.log(name[2])//output : 25<br>

console.log (name) // output : [amin , rahim , 25 ,sabir] // understand<br>

        Know the Array index, length <End>
============================================ 


        Know the Addremove Elements From Arrays Using Push,Pop Shift _ Unshift  <Start>
==========================================================================================

 push method : we can add element in array from last <br>

const numbers = [20, 25, 36, 48, 95]<br>
numbers.push(54)      //we can add element in the last  , we can use it sigle time or multiple times<br>
numbers.push(54,85,68)<br>
console.log(numbers);<br>

///

 pop method : we can remove element in array from last <br>
const names = ['a',"b",'c',"d","e"]<br>
names.pop()         /// it can remove element from a array in the last serially <br>
names.pop()<br>
console.log(names);<br>

// * we can use the pop element in a variable then reuse it. can use it everywhere<br>
<br>
const numbers = [22, 25, 26, 65, 75]<br>
const out1 = numbers.pop() // ! we can reuse the pop element using variable<br>
const out2 = numbers.pop()// ! we can reuse the pop element using variable<br>
<br>
console.log(out1, out2);<br>

<br>
/// * shift is a cousine brother of pop<br>
// * it removes the first element of an arrary<br>

const numbers = [25, 48, 75, 69, 38];<br>
console.log(numbers);<br>
numbers.shift();<br>
numbers.shift();<br>
console.log(numbers);<br>
<br>
/// * unshift is a cousine brother of push<br>
// * it adds the first element of an arrary<br>

const number = [12, 14, 27, 36];<br>
console.log(number);<br>
number.unshift(45);<br>
number.unshift(54);<br>
console.log(number);<br>


        Know the Addremove Elements From Arrays Using Push,Pop Shift _ Unshift  <End>
========================================================================================== 

        Know All About Basic Array Methods, IsArray  <start>
==========================================================================================

--------------------------------------------------------------------
/// * includes detitecs whether a element is have or not , if yes , it shows true , else false <br>
//* we can use it using if else condition ,<br>
//* includes crates boolean values like true or false<br>
// * includes caseSensative<br>
// use arrayname.includes(desired number/string/boolean)<br>
<br>
const numbers = [1, 25, 85, 65, 95]<br>
console.log(numbers.includes(85));<br>

// we can use it(includes) through if else<br>
if (numbers.includes(75)){ // we can use includes using this method<br>
    console.log("we can eat food");<br>
}else {<br>
    console.log("we are fasting");<br>
}<br>
<br>
--------------------------------------------------------------------
///* index of ---- we find the index number of this method<br>

const numbers = [1, 25, 85, 65, 95]<br>
console.log(numbers.indexOf(65));<br>
<br>
/// but what happens when any element is not there <br>
console.log(numbers.indexOf("salam")) // if element is not there , than shows -1<br>

--------------------------------------------------------------------

///Is Array method<br>
const numbers = [];<br>
const age = 58;<br>
const heights = [54, 58, 68, 98, 100];<br>
const names = "nishat";<br>
console.log(Array.isArray(names));<br>
console.log(Array.isArray(heights));<br>
console.log(Array.isArray(age));<br>
<br>
--------------------------------------------------------------------

///* joins return all element in a array  <br>
// * by default comma <br>
//* it returns the array as a string<br>

const social = [1,2,3,4,5]<br>
console.log(social.join("+")); //output: 1+2+3+4+5 // as a string<br>
console.log(social.join("-"));<br>
console.log(social.join("*"));<br>
console.log(social.join("/"));<br>

--------------------------------------------------------------------
//* concat method<br>
// * if we want to use two array combine <br>
// * use FirstArrayName.concat(secondArrayname)<br>
const var1 = [1, 2, 3, 8];<br>
const var2 = [5, 88, 33, 48];<br>
console.log(var1.concat(var2));<br>

--------------------------------------------------------------------

// * slice method<br>
// * we can use it using arrayname.slice (1,5) // from 2 it start and end with 4<br>

const numbers = [1, 2, 58, 68, 85, 689, 741]<br>
console.log(numbers.slice(1,5));<br>
//output : [ 2, 58, 68, 85 ]<br>

--------------------------------------------------------------------

// * splice method<br>
// * know about it from google<br>
// * So much Easy<br>

--------------------------------------------------------------------
sumup:<br>
/// we can use length using >>>> ArrayName.length()<br>
/// we can use index using >>>> ArrayName[indexNumber]<br>
/// we can use push using >>>> ArrayName.push(desired number)<br>
/// we can use pop using >>>> ArrayName.pop()<br>
/// we can use shift using >>>> ArrayName.shift()<br>
/// we can use unshift using >>>> ArrayName.unshift(desired number)<br>
/// we can use includes using >>>> ArrayName.includes(desired number) // true or flase ///<br>
/// we can use index of  using >>>> ArrayName.indexof(desired number) // index number show korbe ///<br>
/// we can use isArray  using >>>> Array.isArray(array name) // true or false ///<br>
/// we can use join  using >>>> Arrayname.join("+/-/*/,|") // returns string ///<br>
/// we can use concat using >>>> use FirstArrayName.concat(secondArrayname) // returns total array ///<br>
/// we can use slice using >>>> use arrayName.slice(2,5) // from 2 to 4 index /// out put show (2to3index)<br>

        Know All About Basic Array Methods, IsArray  <End>
==========================================================================================



