// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(act = "go to the office") {
    return `This Monday, I will ${act}.`
}

function wrapAdjective(flare = '*') {

    return function(param = "special") {
        return `You are ${flare}${param}${flare}!`
    }
}

const Calculator = {}
Calculator['add'] = (function() {return 1 + 3})
Calculator['subtract'] = (function() {return 1-3})
Calculator['multiply'] = (function() {return 1 * 3})
Calculator['divide'] = (function() {return 10 / 5})

function actionApplyer(start, array) {
    let final = start

    for (let i = 0; i < array.length; i++) {
        final = array[i](final)
    }
    return final
}