 
function createRobot(model, year, color) {
    return {
        model: model,
        year: year,
        color: color,
        greet: function() {
            console.log(`Hello! I am a ${this.color} ${this.model} from ${this.year}.`);
        }
    };
}

 
const robot1 = createRobot("RX-78", 2025, "Silver");

 
console.log(robot1.model);  
console.log(robot1.year);
console.log(robot1.color);  


robot1.greet(); 
