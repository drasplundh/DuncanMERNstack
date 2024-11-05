
// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

// a. 
console.log("Good Heroes")
let goodHeroes = heroes.filter((hero) => hero.isEvil == false);
console.log(goodHeroes);

// b.
// ???


// c.
console.log("sir heroes");
let sirHeroes = goodHeroes.map((hero) => "sir " + hero.name);
console.log(sirHeroes);

// d. 
let goodMarvel = heroes.some((hero) => hero.family == 'Marvel' && hero.isEvil == false)
console.log("Any Good Marvel heroes?: " + goodMarvel)


//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice)


//3. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}
let lname = person.userDetails.last;
let contact = person.userDetails.contactNum = 9119119110; // added contact number
console.log(lname) // last name grabbed through destructuring
console.log(person); 

//4. Give me an example of const data manipulation
// const can be manipulated from an object, but the object reference itself cannot be
// manipulated
const person2 = {
    fname: "John",
    lname: "Bob",
    age: 22
}

person.occupation = "carpenter" // we're adding a field to the const obj
person.fname = "Gerald" // we're manipulating the "fname" field of the person object
console.log(person2);

//5. What is the difference between for-of and for-in show with examples
// for-in is used for looping through json objects, or key-value pairs
let jsonObj = {
  item: "book",
  price: 15,
  title: "harry potter"
}
for (key in jsonObj) {
  const elem = jsonObj[key]
  console.log(elem); // logs each value for each key
}

// for-ofs are used to iterate through arrays
let numbersArr = [1, 2, 3, 55, 111, 6, 9, 15]
for (num of numbersArr) {
  console.log(num); // will log each number in the numbers array
}

//6. Give me an example of bind and write its usage, comparison with arrow function
const person3 = {
  fname: "john",
  lname: "doe",
  getFullName() {
    console.log("Full name is:", this.fname + " " + this.lname);
    // arrow functions preserve 'this' context through scope - function above has access to 'this'
    setTimeout(() => {
      console.log("'this' preserved through lexical scope ", this.fname + " " + this.lname);
    }, 500);
  }
};

function printGreeting(callback) {
  callback();
}

// .bind() preserves 'this' through callbacks
printGreeting(person3.getFullName); // lost through callback
printGreeting(person3.getFullName.bind(person3)) // perserved because of .bind()



//7. Create an example showing usage of event loop in concurrent execution cycle
// we can use a timeout function to show that JS will continue to execute code while
// the setTimeout function waits 2 seconds to execute asynchronously
console.log("I execute first!")
setTimeout(() => {
  console.log("I'll complete in 2 seconds, hello from question 7!")
}, 2000)
console.log("I execute next, even though i'm after the timeout function!");

//8. create an example showing usage of short hand and default param.
// default params
function mult(a=0, b=0, c=0) {
  return a * b * c;
}
console.log("with values: " + mult(1, 2, 3)); // should output 6
console.log("with default params: " + mult()) //should output 0 - via default params


//9. Create two objects with some properties and merge them using Object method and ES6 way
var Dog = {dogname : "Fido", breed : "Husky", microchip : "Yes"}
var Owner = {name : "Johnny", age : 45}
var Address = {street : "888 Road Street", city : "Chicago", zipcode : 12345}

DogOwner = Object.assign(Dog, Owner, Address);
DogOwner2 = {...Dog, ...Address, ...Owner}; // ES6 Merge

console.log("DogOwner: ");
console.log(DogOwner);
console.log("DogOwner2", DogOwner2); 


//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
let myMap = new Map();
myMap.set(1, "Duncan");
myMap.set(2, "John");
myMap.set(3, "Marie");
console.log(myMap.get(1));
myMap.delete(2);
console.log(myMap);
myMap.clear;
console.log(myMap); // empty

//11. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
// ???
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve("Success!");
      setTimeout(() => {
        reject("Failed");
      }, 1000);
  }, 2000);
});

p.then((message) => {
  console.log(message)
}).catch((error) => {
  console.log(error)
})

//12. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
// ???
// function mult(arr) {
//   let num = 1
//   num *= [...arr]
//   console.log("Number is: ", num);
// }
// function spread(n) {
//   let arr = [];
//   for (i=1; i <= n; i++)
//     arr.push(i);
//   mult(arr);
// }
// spread(3);

//13. Use the question #11 to build promises using async and await - with multithread


//14. Create an example of generator function of your choice
// generators can pause, and pick up where they left off in the execution cycle
function* numberGenerator() {
  let i = 0;
  while(i < 10) {
    yield i++;
  }
}
const generator = numberGenerator();
console.log(generator.next().value) // outputs 0
console.log(generator.next().value) // ouputs 1
console.log("I'm some logic in between the cycles");
console.log("picking up where we left off: ", generator.next().value); // outputs 2

//15. Explain your knowledge of - statelessness, http, REST, spa and classical applications
// statelessness is the idea that when passing information around between concerns, state should not matter.
// for example, Servers in a RESTful web application are stateless.  This means that all the information the server needs
// is provided by the request, the Server doesn't need to maintain a certain state to send a response.
// HTTP are essentially a set of rules that govern how browswers/clients and servers communicate with each other
// REST stands for REpresentational State Transfer, and it is a design practice, but not a standard.  An API is RESTful when it adheres
// to these properties:
  // 1. Client-Server relationship with requests managed through HTTP
  // 2. Stateless client-server communication, meaning no information from the client is stored on the server keeping it stateless.
  // evertyhing needed to communicate back to the client is already avaiable, and the server doens't have to 'keep track' of anything
  // to respond correctly
  // 3. Cacheability to streamline server-client communication
  // 4. A uniform interface for communication between various components
  // 5. A layered system, in which server architecture is organizes servers based on concerns
// SPA stands for "Single Page Application" A single Page Application works in such way that modular components update individually
// during requests/responses.  By doing so, the page never has to 'redirect,' and to the user, it looks like the page changes instantly without
// having to reload or go to a different page.  Angular and React are both frameworks/libraries that are good for implementing SPAs
// A classical application, or how webpages were made in the early days of the internet, were simple static HTML files. While this is useful
// for displaying information, it was difficult to currate a user experience.  Certain things like styling could be applied via HTML tags to
// make a website a litte more interesting, but the HTML files became bloated with tags and syntax.  CSS was created to help unify all the styling
// for websites.  With the advent of Javascript, HTML webpages could be manipulated while the user was browsing the page, offering more
// unique and interactive experiences.  Usually, the browser (client) would request the info from a server, and the webpage would load, with all
// the styling and everything defined in the HTML and CSS files.  With Javascript, you could continually query the server and dynamically load new
// new info.  It depends how far back you go, but to me a "classical" web application would have been a static webpage with little interactivity.