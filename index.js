// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(newString="*") {
    return function(param="special") {
        return `You are ${newString}${param}${newString}!`
    }
}

let addfn = function(a,b) {
    return a + b
}

let subtractfn = function(a,b) {
    return a - b
}

let multiplyfn = function(a,b) {
    return a * b
}

let dividefn = function(a,b) {
    return a / b
}

const Calculator = {add: addfn, subtract: subtractfn, multiply: multiplyfn, divide: dividefn}



function actionApplyer(start, fns) {
    fns.forEach( myFunction => start = myFunction(start))
    return start
}