// -------------------
// * ES6 er revision 
// -------------------
// var let const 
const tax = 5000;
let eta = 5;
eta = 3

const student = { name: 'nayeem', marks: 50 }
const friends = ['abul', 'babul', 'chabuk']


// default parameter 
function add(num1, num2 = 0) {

}

// template String 
const dynamicText = `my Tas: ${tax} and marks ${student.marks * 1.2} has friend: ${friends[1]}`;

const innerHTML = `
<div>

    <h1>Hellow: ${friends.length}
    </h1>
    <p></p>
<div>
`

// arrow function 
const add2 = (num1, num2 = 0) => num1 + num2;

const tenTimes = x => x * 10;


// spread operaton
const newFnd = [...friends, 'abul', 'babul', 'ebul']

//destructuring 
const { marks: totalMarks, age = 0 } = student
// console.log(totalMarks, age)

const [firsFnd] = friends;






