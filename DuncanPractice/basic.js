// Q1
/*
1. JavaScript is a Functional Programming Language
2. JavaScritp has 7 Primitive Values
    - null
    - undefined
    - boolean
    - number
    - String
    - Object
    - Symbol
    - Bigint
3. JavaScript allows for functions to be passed as parameters, allowing for Asynchronus calls
4. JavaScript is a dynamic programming language.  This means variables do not need to be declared as a certain type, like in strongly typed languages.
5. JavaScript is founded on and developed from ECMAscript

*/

// Q2
console.log("----------------Q2------------------")
var myVar = "Robert"
console.log("Type: " + typeof myVar + ", Value: " + myVar);
myVar = .0266;
console.log("Type: " + typeof myVar + ", Value: " + myVar);
myVar = false;
console.log("Type: " + typeof myVar + ", Value: " + myVar);
myVar = {nyname : "Test Me"};
console.log("Type: " + typeof myVar + ", Value: " + myVar);
myVar = 25166665;
console.log("Type: " + typeof myVar + ", Value: " + myVar);
myVar = undefined;
console.log("Type: " + typeof myVar + ", Value: " + myVar);
myVar = true;
console.log("Type: " + typeof myVar + ", Value: " + myVar);
myVar = "Robert Jr.";
console.log("Type: " + typeof myVar + ", Value: " + myVar);
myVar = null;
console.log("Type: " + typeof myVar + ", Value: " + myVar);
myVar = {};
console.log("Type: " + typeof myVar + ", Value: " + myVar);
myVar = -32767;
console.log("Type: " + typeof myVar + ", Value: " + myVar);

// Q3
console.log("----------------Q3------------------")
function showUserInfo(firstName, lastName, age){
    console.log(firstName, lastName, age);
}

showUserInfo("Bob", "Johnson", 30);

// Q4
console.log("----------------Q4------------------")
function doaddtion(num1, num2, num3) {
    return num1 + num2 + num3;
}
// js recognizes that the arguments passed are all of the number type, and so it will add all three to output 9
console.log(doaddtion(2, 3, 4)); 

// console.log(doaddition(2))

// console.log(doaddition(2.3, 3));

// console.log(doaddition("first", 2, "three"));

// Q5
console.log("----------------Q5------------------")
console.log("----------------HOISTING------------------")
// HOISTING

var displayed = "I'm not hoisted";
funcHoist(displayed); // function can be called above from where it is defined because of function hoisting
                      // if a variable is defined BEFORE the function call, no variable hoisting occurs

function funcHoist(foo) {
    console.log("I can be called anywhere because of function hoisting!");
    console.log(foo);
}

funcHoist(displayed2); // will display undefined, because when a variable is hoisted is defaults to undefined
var displayed2 = "I'm hoisted - but really i'll print undefined"

// CONSTRUCTOR FUNCTION
console.log("----------------CONSTRUCTOR FUNC------------------")
// declarea a dogConstructor function
var dogConstructor = function(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
}
// can call this constructor function to make objects
// can use 'new' keyword
var dog = new dogConstructor("Fido", "Husky", 3); 
console.log(dog);

// CLOSURE
console.log("----------------CLOSURE------------------")
// Closures are a way to "hide" or "encapsulate" data in js by putting the data within another function
// in this case, "secretInfo" will only display if the user calls the function with the correct pin
function closureExample(name, age, balance) {
    var username = name;
    var userAge = age;
    var userBalance = balance;
    var pin = 12345;
    var secretInfo = "I'm protected data"; // Protected data
    var details = function(pinNum) {
        if (pin == pinNum) {
            return {
                username,
                userAge,
                userBalance,
                secretInfo
            }
        } else {
            return {
                    username,
                    userAge,
                    userBalance
            }
        }
    } 
    return details;
}

var user = closureExample("Joe", 22, 1200);
console.log(user(12345)); // diplays secret info
console.log(user(9999)); // won't display secret info




// Q6
// Call, Apply and Bind are all methods that allow one object to borrow a method from another.
// Call and Apply essentially do the same thing, but Call takes multiple parameters as arguments, whereas Apply takes an array as an argument
// Bind prevents the loss of the 'context' I.E. 'this' when a callback method is used.

// Q7 Bind
console.log("----------------Q7------------------")
var student = {
    firstName : "John",
    lastName : "Allen",
    age : 22,
    display : function() {
        console.log("From Q7: " + this.firstName + " " + this.lastName + " " + this.age);
    }
}

student.display(); // displays fine
console.log("Note:, because of the setTimeOut() functions, the results will print after the rest of the program")
setTimeout(student.display, 1000); // will display undefined for all fields, because we're passing "display" as a callback function

var display = student.display.bind(student);
setTimeout(display, 1000); // displays the correct info after 1 sec because of binding


// Q8
var nullObj = Object.create(null)


// Q9
// you can merge object properties using the Object.assign() function
console.log("----------------Q9------------------")
var Dog = {dogname : "Fido", breed : "Husky", microchip : "Yes"}
var Owner = {name : "Johnny", age : 45}
var Address = {street : "888 Road Street", city : "Chicago", zipcode : 12345}

DogOwner = Object.assign(Dog, Owner, Address);

console.log("DogOwner: ");
console.log(DogOwner);


// Q10
// Exporting a Module
var User = {
    name : "Adam",
    age : 55,
    address : "Earth"
}

// exports the user module
// refer to "userImport.js" to see how it is imported
module.exports = {
    User
}


