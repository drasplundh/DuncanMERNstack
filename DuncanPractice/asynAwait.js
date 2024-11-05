function resolveAfter2Seconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                "statuscode": 200,
                "statusmsg": "resolved"
            });
        }, 2000);
    });
}

console.log("async Execution starts");

async function asyncCall() {
    console.log("Before waite, blocking thread starts")
    await resolveAfter2Seconds()
        .then((data, err) => console.log(data))
        .catch((err) => console.log(err))
}