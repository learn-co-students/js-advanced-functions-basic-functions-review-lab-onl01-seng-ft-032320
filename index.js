// this is a function decleration that CAN be hoisted
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
// this is a function expression that uses an anonymous function ie. function(...){}, it CANNOT be hoisted
let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}
// this is a function decleration with an inner anonymous function showing use of scope chain
function wrapAdjective(wrap="*") {
    return function(param="special") {
        return `You are ${wrap}${param}${wrap}!`
    }
}
// an object containing functions
let Calculator = {
    add() {
        return 1 + 3 },
    subtract() {
        return 1 - 3 },
    multiply() {
        return 1 * 3 },
    divide() {
        return 10 / 5 }

}

function actionApplyer(int, arr) {
    arr.forEach(e => {
        int = e(int)
    })
    return int
}


