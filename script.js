// Animal class
class Animal {
  constructor(species) {
    this.species = species;
  }

  get species() {
    return this._species; // Using a private property for encapsulation
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

// Cat subclass
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// Dog subclass
class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Example usage
const cat = new Cat("Feline");
console.log(cat.species); // Output: Feline
cat.makeSound(); // Output: Generic animal sound
cat.purr(); // Output: purr

const dog = new Dog("Canine");
console.log(dog.species); // Output: Canine
dog.makeSound(); // Output: Generic animal sound
dog.bark(); // Output: woof
