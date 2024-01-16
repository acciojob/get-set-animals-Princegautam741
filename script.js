class Animal {
  constructor(species) {
    this.species = species;
  }

  makeSound() {
    console.log("Animal sound");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }

  // Overriding the makeSound method in the Cat subclass
  makeSound() {
    console.log("Meow");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }

  // Overriding the makeSound method in the Dog subclass
  makeSound() {
    console.log("Bark");
  }
}

// Example usage
const genericAnimal = new Animal("Generic");
console.log("Generic Animal Species:", genericAnimal.species); // Output: Generic
genericAnimal.makeSound(); // Output: Animal sound

const fluffyCat = new Cat("Fluffy Cat");
console.log("Cat Species:", fluffyCat.species); // Output: Fluffy Cat
fluffyCat.makeSound(); // Output: Meow
fluffyCat.purr(); // Output: purr

const barkingDog = new Dog("Barking Dog");
console.log("Dog Species:", barkingDog.species); // Output: Barking Dog
barkingDog.makeSound(); // Output: Bark
barkingDog.bark(); // Output: woof
