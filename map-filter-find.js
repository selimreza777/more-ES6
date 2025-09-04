const students = [
  { id: 101, name: 'Nonita', marks: 56 },
  { id: 102, name: 'Bonita', marks: 66 },
  { id: 103, name: 'Lolita', marks: 81 },
  { id: 104, name: 'Jonita', marks: 82 }
]

const names = students.map(students => students.marks * 0.75)
const goodStudents = students.filter(student => student.marks > 80)
const goodStudent = students.find(student => student.marks > 80)
console.log(goodStudent)
// console.log(names)