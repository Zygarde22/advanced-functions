function Animal(species, order, clade,) {
    this.species = species;
    this.order = order;
    this.clade= clade;
     
}

 
Person.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

 
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.fullName()} and I am ${this.age} years old.`);
};

 
const person1 = new Person("Khriston", "Robinson", 29, "Brown");

 
console.log(person1.fullName());  
person1.greet();   
