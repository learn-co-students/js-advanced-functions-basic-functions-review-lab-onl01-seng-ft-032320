// Your code here
function saturdayFun(todo="roller-skate") {

    return `This Saturday, I want to ${todo}!`
}


function mondayWork(work="go to the office") {
    return `This Monday, I will ${work}.`
}


function wrapAdjective(flair = "*"){
    let char = flair
    return function(noun = "special"){
        return `You are ${char}${noun}${char}!`
    }
}


const Calculator = {

    add: function(a, b){
        return a + b;
    },

    subtract: function(a, b){
        return a - b;
    },

    multiply: function(a, b){
        return a * b;
    },

    divide: function(a, b){
        return a / b;
    }
};


function actionApplyer(starting_int, function_array){
    let int = starting_int;
    function_array.forEach(func => {
        int = func(int)
    });
    return int
}
