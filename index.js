// Your code here
function saturdayFun(activty = "roller-skate") {
    return `This Saturday, I want to ${activty}!`

}

function mondayWork(activty = "go to the office") {
    return `This Monday, I will ${activty}.`

}

function wrapAdjective(adjective= "*") {
    let result = adjective
    
    return function(string) {
        
      return  `You are ${result}${string}${result}!`}
      
}

const Calculator = { add: 
    function (num, num2){
    return num += num2},
    subtract: 
    function(num, num2){
        return num -= num2
    },
    multiply: 
    function(num, num2){
        return num * num2
    },
    divide: 
    function(num, num2){
        return num / num2
    }

}

function actionApplyer(sint, array_functions) {
    let i = sint
    array_functions.forEach(array => {
        i = array(i)
    })
    return i
}