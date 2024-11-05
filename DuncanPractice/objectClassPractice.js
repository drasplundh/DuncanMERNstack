
// Create Person variable
var Person = {
    Name : "Bob",
    Age : 25,
    Email : "Bob@email.com",
    GetPersonInfo : function() {
        return `
            ${this.Name}
            ${this.Age}
            ${this.Email}
        `
        
    }
}


console.log("Person: " + Person.GetPersonInfo());

// create objects
var student = new Object(Person);
var student2 = Object.create(Person);

// new Object() constructor
console.log("Constructor new Object() " + student.GetPersonInfo())

// Object.create() constructor
console.log("Constructor - Object.create(): " + student2.GetPersonInfo())

// add fields for student2 object
student2.id = 152;
student2.major = "Physics"

// Override GetPersonInfo()
student2.GetPersonInfo = function() {
        return `
        ${this.Name}
        ${this.Age}
        ${this.Email}
        ${this.id}
        ${this.major}
    `
};

console.log("Override GetPersoninfo(): " + student2.GetPersonInfo());


// Merge Three Objects
var Dog = {dogname : "Fido", breed : "Husky", microchip : "Yes"}
var Owner = {name : "Johnny", age : 45}
var Address = {street : "888 Road Street", city : "Chicago", zipcode : 12345}

DogOwner = Object.assign(Dog, Owner, Address);

console.log("DogOwner: ");
console.log(DogOwner);


// Closure
function GovernmentID(name, age, driversLicenseNo) {
    var personName = name;
    var personAge = age;
    var driverLicense = driversLicenseNo;
    var ssn = "111-11-1111"; // private data
    var pin = 12345; // private data
    var error = "Incorrect PIN"

    var personDetails = function(name, personalPin) {
        if (personalPin == pin) {
            return {
                personName,
                personAge,
                driverLicense,
                ssn // if pin is right show ssn
            }
        } else {
                return  {
                personName,
                personAge,
                driverLicense,
                error // if pin is wrong show error
            }
        }
    }
    return personDetails;
}

var personObj = GovernmentID("Joe", "29", 9954311);
// prints ssn
console.log(personObj("Nick", 12345));
// will not print ssn
console.log(personObj("Nick", 99999))


