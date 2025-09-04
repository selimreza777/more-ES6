// filter kore kono kichu check kora hocce 
const numbers = [1, 3, 4, 5, 10, 11, 23];
const greatherThan10 = numbers.filter(x => x > 10)
const evenNumbers = numbers.filter(x => x % 2 === 0)
console.log(evenNumbers)
console.log(greatherThan10)