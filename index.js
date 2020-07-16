// Your code here

function saturdayFun(activity = 'roller-skate') {
    return 'This Saturday, I want to ' + activity + "!";
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(wrap = "*") {
    let innerFunction = function(initial = 'special') {
        return `You are ${wrap}${initial}${wrap}!`
    }
    return innerFunction;
}
const Calculator =  {
    add : function(a, b) {
        return a + b;
    },
    subtract : function(a, b) {
        return a - b;
    },
    multiply : function(a, b) {
        return a * b;
    },
    divide : function(a, b) {
        return a / b;
    }
};

function actionApplyer(int, array) {
    
    if (array.length < 1) {
        return int;
    } else {
        return 4;
    }
}