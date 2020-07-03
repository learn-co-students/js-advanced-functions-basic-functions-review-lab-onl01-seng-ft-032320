// Your code here
function saturdayFun(arg = "roller-skate") {
    return `This Saturday, I want to ${arg}!`
}

let mondayWork = function(arg = 'go to the office') {
    return `This Monday, I will ${arg}.`
}

let wrapAdjective = function(str = "*") {
    return function(par = "special") {
        return `You are ${str}${par}${str}!`
    }
}

let encouragingPromptFunction = wrapAdjective("!!!")

let Calculator = {
    add: () => { return 1 + 3 },
    subtract: () => { return 1 - 3 },
    multiply: () => { return 1 * 3 },
    divide: () => { return 10 / 5 }

}

function actionApplyer(int, arr) {
    let num = int;
    if (arr.length === 0) {
        return num
    } else {
        arr.forEach(el => {
            num = el(num)

        })
    }
    return num
}