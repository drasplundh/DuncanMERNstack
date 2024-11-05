let userInfo = (name, age) => {
    return {
        name, age
    }
}

let userInfo2 = function(name, age) {
    return {
        name, age
    }
}

let name = "GlobalName"
let age = 25
let userInfoGlobal = () => {
    return {
        name, age
    }
}

console.log(userInfo("Arrow", 5));
console.log(userInfo2("NoArrow", 10));
console.log(userInfoGlobal());