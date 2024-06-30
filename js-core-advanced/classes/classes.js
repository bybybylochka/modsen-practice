class Person {
    #name;
    #age;
    #country;
    constructor(name, age, country) {
        this.#name = name;
        this.#age = age;
        this.#country = country;
    }
    get name() {
        return this.#name;
    }
    get age() {
        return this.#age;
    }
    get country() {
        return this.#country;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
    }
}

const person1 = new Person("Kate", 35, "Russia");
const person2 = new Person("Ivan", 28, "England");

person1.displayInfo();
person2.displayInfo();