// Spread is used to spread the elements of any object or array to be used one by one
// It is done by using ...

/* =================
spread operator
===================*/
let nameList = ["Duncan", "Windie", "Hongbo", "Michael"]
console.log("Spread operator:")
console.log(...nameList); // utilize spread operator
console.log();


let user = {
    id : 101,
    name : "Joe",
    userType : "Paid",
    allowedReview : true,
    balance : 1000
}

let addresses = {
    id: 101,
    homeAddress: "88 Road Street",
    officeAddress: "999 Pluto Planet",
}

// let delivery = Object.assign({}, user, addresses);

//joins two objects
let delivery = {...user, ...addresses}; // spreading preserves immutability
addresses.available = "5PM"; // will not display
console.log("Immutability preserved - using spread (...) operator");
console.log(delivery);
console.log();

/* ======================
Rest parameter and operator. any array can be passed as a rest
parameter in any function, but it shouldb e the last parameter.
When we try to assign values to rest operator it should be the
last literal
===========================*/
let add = (a=0, b=0, c=0, d=0, e=0) => a+b+c+d+e
let numberList = [1,2,3,4,5,6]
console.log(add(...numberList)); // spread operator ussage

// we can use spread parameter instead for dynamic variables
let addMax = function(...restNumberList) { // rest param can accept any number of params
    let sum = 0;

    sum = restNumberList.reduce((prevNum, currNum) => {
        return prevNum + currNum;
    },0)
    return sum;
}

console.log(addMax(...numberList));