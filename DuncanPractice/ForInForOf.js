// ForOf - For regular arrays, not key:value pairs like an object

const dogs = ["Pug", "Dalmation", "Shiba Inu", "Springer Spaniel", "Beagle"];

dogs.push("German Sheperd");

for (const dog of dogs) {
    console.log(dog);
}

// ForIn - For iterating through an object - keyvalue pairs
let person = {fname: "Joe", lname: "Shmoe", job: "Janitor"};

for (const key in person) {
    const element = person[key];
    console.log(key + " : " + element);
}

console.log("-------Calling dogs (array) from a For IN loop------------");
for (const key in dogs) {
    const element = dogs[key];
    console.log(key + " : " + element);
}
console.log("---------notice that the keys are all array indexes-------")

