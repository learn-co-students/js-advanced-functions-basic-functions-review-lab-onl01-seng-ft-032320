// this is a function declaration 
// can be hoisted
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// this a function expression (function assigned to variable)
// cannot be hoisted
// also, function(){...} is an anonymous functions as it does not have a function name
let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

// function declaration with inner anonymous function
// scope chain allows inner function to access parent argument
function wrapAdjective(flare="*") {
    return function(param="special"){
        return `You are ${flare}${param}${flare}!`
    }
}

// object with multiple functions inside of it
let Calculator = {
    add(){
        return 1 + 3
    },
    subtract(){
        return 1 - 3
    },
    multiply(){
        return 1 * 3
    }, 
    divide(){
        return 10 / 5
    }
}

function actionApplyer(int, arr){
    arr.forEach(e => {int = e(int)});
    return int
}