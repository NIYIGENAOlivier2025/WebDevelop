let name = "Alice";
let age = 30;
let fruits = ["apple", "banana", "cherry"];

function greet(userName) {
    return "Hello, " + userName + ", Uraho";
}
if (age >= 18) {
    console.log(name + " is an adult.");
} else {
    console.log(name + " is a minor.");
}

for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit: " + fruits[i]);
}

let person = {
    name: name,
    age: age,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

console.log(greet(name));
person.greet();