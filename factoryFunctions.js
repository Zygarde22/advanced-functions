let Person = function (name, age) {
 
    // creating person object
    let person = {};
 
    // parameters as keys to this object  
    person.name = name;
    person.age = age;
 
    // function to greet
    person.greeting = function () {
        return (
            'Hello I am ' + person.name
            + '. I am ' + person.age
            + ' years old. '
        );
    };
    return person;
};
 
let person1 = Person('Abhishek', 20);
console.log(person1.greeting());
 
let person2 = Person('Raj', 25);
console.log(person2.greeting());