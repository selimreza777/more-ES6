class Vehicle {
  constructor(type, brand, price) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }
  //this: bolte class er vitore j objcet banano hobe seitake
  getThis() {
    console.log(this)
  }
  getPrice() {
    return this.price;
  }
}
const car1 = new Vehicle('car', 'Marsedis', 5000000);
const bike = new Vehicle("bike", 'toyota', 250000);
const toyota = new Vehicle('car', 'Toyota', 400000);
car.getThis();
bike.getThis();
toyota.getThis();
