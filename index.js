// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(cool="*") {
    return function (name="special") {
        return `You are ${cool}${name}${cool}!`
    }
}

const Calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b
    },
    multiply: function(a,b) {
        return a * b
    },
    divide: function(a,b) {
        return a / b;
    }
}

let actionApplyer = function(start, array) {
    let st = start
    
    for(let i=0; i < array.length; i++) {
        st = array[i](st)
    }

    return st;
}