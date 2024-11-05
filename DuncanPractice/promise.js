let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve("Sucess");
    } else {
        reject("Failed");
    }
})

p.then((message) => {
    console.log("this is in the then " + message);
}).catch((message) => {
    console.log("this is in the catch " + message);
})

const doSomething1 = new Promise((resolve, reject) => {
    resolve("Did something 1");
})

const doSomething2 = new Promise((resolve, reject) => {
    resolve("Did something 2");
});

Promise.all([
    doSomething1,
    doSomething2
]).then((message) => {
    console.log(message);
})