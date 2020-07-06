// Your code here

function saturdayFun (a="roller-skate") {
    return (`This Saturday, I want to ${a}!`)
}

function mondayWork(a = "go to the office") {
    return (`This Monday, I will ${a}.`)
}

function wrapAdjective(a="*") {
    return function(b="special"){
        return (`You are ${a}${b}${a}!`)
    }
}

const Calculator = {
    add: function (a, b) {
        return a + b
    },
    subtract: function (a, b) {
        return a - b
    },
    multiply: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        return a / b
    }
}

function actionApplyer(int, arr) {
    for (let i = 0; i < arr.length; i++) {
        int = arr[i](int);
    }
    return int;
}

