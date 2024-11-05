//Questions for practice

//print firstname, total marks and Individual Subject Marks, using object and nested destructuring
//along with that also create a lastname and Ecology as (marks) "95", without making any change in Student

//create an array of your aspirations, print first three to achieve in 2024,25,26 and keep others in ...rest operator, using array destructuring 

//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

//create an example of const where we can update on property of the object, where it says const is mutable

//create a for loop using var and let, print each value in timeout after 2 second and try to 
//demonstrate functional scope of var and lexical of let 


/* ===============================
    Object Destructure
    ==============================
*/
let Student = {
    FirstName : "Stacy",
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}


let {FirstName, LastName = "Jones",  TotalMarks, Subject : {Physics, Chemistry, Language, Ecology = 95}} = Student;
console.log("===============Destructured Object============");
console.log(FirstName, LastName, TotalMarks, Physics, Chemistry, Language, Ecology);


/* ===============================
    Aspirations Array destructuring
    ==============================
*/
let aspirations = ["Land A Job", "Buy A House", "Get certified to Fly", "Learn to Cook", "Make more friends"]

let [asp2024, asp2025, asp2026, ...asp2027] = aspirations; // destructure array
console.log("==================Destructured Array===========");
console.log(asp2024, asp2025, asp2026, asp2027); // the ... operator destructures the remaining elements in the array
                                                // and stores them in the variable "asp2027"


console.log();
/* ===============================
    Multiply 3 func
    ==============================
*/
console.log("==================Multiply3()=============");
let multiply3 = function(x = 0, y = 0, z = 0) {
    return x * y * z;
}


console.log("Mulitply3(2, 4, 5) = " + multiply3(2, 4, 5)) // should return 40
console.log("Empty call to multiply3() = " + multiply3()); // should return 0;

console.log();
/* ===============================
    Strong and Weak Maps
    ==============================
*/
console.log("==================Strong and Weak Maps=============");
let myMap = new Map(); // Strong map
myMap.set("Italy", "Rome"); // using String Keys
myMap.set("India", "Mumbai");
myMap.set("Germany", "Munich");
myMap.set("Spain", "Madrid");
myMap.set("China", "Beijing");
myMap.set(1, "Idaho");
myMap.set(2, "Wyoming");
myMap.set(3, "Louisiana");


console.log("Call with String key: " + myMap.get("Italy")); // returns Rome
console.log("Call with number key: " + myMap.get(1)); // returns Idaho
let country1 = {};
let country2 = function() {};
myMap.set(country1, "Bulgaria"); // This makes the map "weak", when we use reference types as keys
myMap.set(country2, "Norway");

console.log("Call with Object key: " +  myMap.get(country1)); // returns Bulgaria
console.log("Call with Function key: " + myMap.get(country2)); // returns Norway

console.log();
/* =====================================================
    Create an Array and display using For In and For Of
    =====================================================
*/
console.log("==================For In For Of=============");
let myArr = [1, 2, 3, 4, 5]; // create array
myArr.push(6); // add a 6th value


// for in are mostly for iterating through key - value pairs, like in a JSON obejct

console.log("For IN");
for (const index in myArr) {
    console.log(myArr[index]);
}

console.log("For OF");
// for of are mostly used for iterating through an array, or a String
for (const index of myArr) {
    console.log(index);
}

console.log();
/* =====================
   Mutable const Object 
   =====================
*/
console.log("==================Mutable Const=============");
// const cannot be reassigned, but you can change properties of an object
// you CANNOT reassign the object
const myObj = {
    name : "Duncan",
    age : 32,
    value : "Change me!"
}

myObj.value = "const is mutable!"

console.log(myObj);

console.log();
/* =====================
   Var vs Let
   =====================
*/
console.log("==================Var & Let=============");
/*
Some Quick Facts: 
    var is function scoped
    let is BLOCK scoped
    (const is also block scoped)
    
    var can be redclared for reassignment 
        var myVar = 1
        var myVar = 2 - totally fine

    let CANNOT be redeclared for reassignment
        let myVar = 1
        let myVar = 2 - creates an error

    var can be hoisted
    let cannot be hoisted
*/


console.log();
/* =====================
   Spread/Rest
   =====================
*/
console.log("=================Spread/Rest===================");
let vaccines = ["Measels", "COVID", "Polio", "Tetanus"];
console.log(...vaccines); // spread operator
let doctor = {
    name: "Dr. Smith",
    practice: "Pediatrician",
    
}


