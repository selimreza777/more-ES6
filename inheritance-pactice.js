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
