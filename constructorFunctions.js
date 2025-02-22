function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

 
const person1 = new Person("Khriston", "Robinson", 29, "Brown");

 
console.log(person1.firstName);   
console.log(person1.lastName);   
console.log(person1.age);        
console.log(person1.eyeColor);   
