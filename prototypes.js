 
function Animal(species, order, clade) {
    this.species = species;
    this.order = order;
    this.clade = clade;
}

 
Animal.prototype.describe = function() {
    console.log(`This is a ${this.species} from the order ${this.order}, which belongs to the clade ${this.clade}.`);
};

 
const lion = new Animal("Lion", "Carnivora", "Mammalia");
 
console.log(lion.species); 
console.log(lion.order);   
console.log(lion.clade);    

 
lion.describe(); 
