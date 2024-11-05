// ==================================================================== ARRAY 1
let sessionList =["AWS", "MERNStack", "JAVA"]

let session1 = sessionList[0];
let session2 = sessionList[1];
let session3 = sessionList[2]; // copy each element of array individually

console.log("From individual vairables");
console.log(session1);
console.log(session2);
console.log(session3);
console.log("\n")

// ==================================================================== ARRAY 2
let [s1, s2, s3] = sessionList; // another way to copy from array

console.log("From copied array");
console.log(s1);
console.log(s2);
console.log(s3);
// ==================================================================== ARRAY 3
let sessionList2 =["AWS", "MERNStack", "JAVA", "Spring", "C"] // if you have an array longer than the variable count
                                                              // only the first couple elemetns will be stored
let [ss1, ss2, ss3] = sessionList2;

console.log("\n")
console.log("Values from array larger than number of declared variables");
console.log(ss1, ss2, ss3);

// ==================================================================== REMAINING OPERATOR
// you can use the "..." operator to grab the remaining values of an array
// another, extra, and remaining will all be assigned to variable c.
console.log("\n")
let sessionList3 = [a, b, ...c] = ["aValue", "bValue", "anotherValue", "extraValue", "remainingValue"]
console.log("c holds remaining values");
console.log("a: " + a);
console.log("b: " + b);
console.log("c: " + c);

// ==================================================================== SWAP VALUES
console.log("\n")
// you can swap values like so
let d = "new D", e = "new E";
[d, e] = [e, d] // performs the swap
console.log("Shows swapped values")
console.log("d: " + d);
console.log("e: " + e);

// ==================================================================== OBJECT DESTRUCTURING
console.log("\n")

// object destructuring
let assessment =  {
    name: "Duncan",
    job: "Programmer",
    grade : {
        Java: 10,
        MERNstack: 8,
        Angular: 3
    }
}


// Nomral destructuring
// console.log("Normal Destructuring");
// let {name, job} = assessment;
// console.log(name);
// console.log(job);

// Nested destructuring
console.log("Nested Destructuring");
let {name, grade = {Java, MERNstack}} = assessment;
console.log(name);
console.log(grade.Java);