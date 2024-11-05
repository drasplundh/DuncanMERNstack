function printResult(result) {
    console.log("calculation: " + result);
}

function adder(num1, num2, callBack) {
    var result = num1 + num2;
    callBack(result);
}

adder(2, 7, printResult);