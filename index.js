// Function Declaration
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Function Expression
let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair="*") {
    return function(word="special") {
        return `You are ${flair}${word}${flair}!`;
    }
}

const Calculator = {
    add: function(a,b) { return a+b; },
    subtract: function (a,b) { return a-b; },
    multiply: function(a,b) { return a*b; },
    divide: function(a,b) { return a/b; }
};

function actionApplyer(startingInt, arrOfFunctions) {
    if (arrOfFunctions.length <= 0) {
        return startingInt;
    } else {
        let result = startingInt;
        for (const fn of arrOfFunctions) {
            result = fn(result);
        }
        return result;
    }
}