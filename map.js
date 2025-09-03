const numbers = [4, 8, 2, 3, 5];

// const double = [];
// for (const num of numbers) {
//   const result = num * 2;
//   double.push(result);
// }

// doubleIt 
// map 
// callback function 
// const doubleIt =x =>x*2;
// const double = numbers.map(doubleIt)

// arrow function er map (mapping)
const double = numbers.map(x => x * 2);

const fiveTimes = numbers.map(num => num * 5);

const squared = numbers.map(num => num * num)

// string arry er upor mapping 
const friends = ['zaved', 'pavel', 'nobel', 'kodbel'];

const nameLengths = friends.map(name => name.length)

// name er fast letter pacci 
// const firstLetter = friends.map(letter => letter[0])

const firstLetter = friends.map(name=> name[0].toLowerCase());
const result = numbers.map(num=>{
  console.log(num*3)
})
const result2 = numbers.map((num, index)=>{
  console.log(num*index)
  return index
})



console.log(result2)