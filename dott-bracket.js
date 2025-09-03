const student = {
  name: 'rafi',
  1: 50,
  'home-addres': 'kochu khet',
  marks: 90
}
//dot notaion
const studentName = student.name;

//bracket notaion
const studentName2 = student['name']
// console.log(studentName2)
// console.log(student['home-addres'])

for (const key in student) {
  const value = student[key]
}

const propName = 'marks'
console.log(student[propName])
