class Vehicle {
  #tin;
  constructor(type, brand, price) {
    this.type = type;
    this.price = price;
    this.brand = brand;
    this.#tin = '125458Wr' //encapsul mane lukiye rakha
  }
  //this: bolte class er vitore j objcet banano hobe seitake
  getTin() {
    return this.#tin;
  }
  getThis() {
    console.log(this)
  }
  getPrice() {
    return this.price;
  }
}
const car1 = new Vehicle('car', 'Marsedis', 5000000);
const bike = new Vehicle("bike", 'toyota', 250000);
const car2 = new Vehicle('car', 'Honday', 400000);
// car1.getThis();
// bike.getThis();
// car2.getThis();
// console.log(car1.getPrice())
// console.log(car2.getPrice())


const student = {
  name: 'Rahul dravid',
  score: 10000,
  getScore: function () {
    console.log(this)
  },
  getScoreArrow: () => {
    console.log(this)
  }
}
student.getScore();
student.getScoreArrow();
