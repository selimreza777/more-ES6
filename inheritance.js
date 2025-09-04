

class Dog extends Animal {
  constructor(name, breed, age, color) {
    super(name, age)
    this.breed = breed;
    this.color = color;
  }
  eat() {
    console.log(`${this.name}is eating`);
  }
  bark() {
    console.log(`${this.name}is barking`);
  }
  meow() {
    console.log(`${this.name}is meowing`)
  }
  Cat() {
    console.log(`${this.name}is cat`)
  }
}
class Cat {
  constructor(name, age, color, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.color = color;
  }
  eat() {
    console.log(`${this.name}is eating`);
  }
  bark() {
    console.log(`${this.name}is barking`);
  }
  meow() {
    // console.log(`${this.name}is meowing`)
  }
  Cat() {
    console.log(`${this.name}is cat`)
  }


}
class Bird {
  constructor(name, species, age) {
    this.name = name;
    this.age = age;
    this.species = species;
  }
  fly() {
    console.log(`${this.name} is Bird flay`)
  }
}

// Parent class
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

// Child class
class Dog extends Animal {
  constructor(name, breed, age, color) {
    super(name, age); // parent constructor call
    this.breed = breed;
    this.color = color;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}

// Object create
const dog1 = new Dog("Cofee", "Deshi", 3, "Brown");

// Access parent + child methods
console.log(dog1);
dog1.eat();   // Parent method
dog1.bark();  // Child method

// const bird1 = new Bird('moyna', 'bangladesh', 1.5,)
// console.log(bird1)
bird1.fly()

const dog1 = new Dog('cofee', 'Deshi', 3, 'Brown')
dog1.eat()
// const cat1 = new Cat('sp', 'white', 5, 'Persian')
cat1.eat()
dog1.eat()
console.log(cat1)
console.log(dog1)
