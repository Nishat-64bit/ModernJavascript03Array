///

/// * pop method : we can remove element in array from last 
const names = ['a',"b",'c',"d","e"]
names.pop()/// it can remove element from a array in the last serially 
names.pop()
console.log(names);

// * we can use the pop element in a variable then reuse it.

const numbers = [22, 25, 26, 65, 75]
const out1 = numbers.pop() // ! we can reuse the pop element using variable
const out2 = numbers.pop()// ! we can reuse the pop element using variable

console.log(out1, out2);