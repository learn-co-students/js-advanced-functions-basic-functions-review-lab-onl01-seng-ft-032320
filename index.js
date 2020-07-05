// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
   return `This Monday, I will ${activity}.`
}


function wrapAdjective(flair = "*"){
    return function(itemOne = "special"){
        return `You are ${flair}${itemOne}${flair}!`
    }
}
let encouragingPromptFunction = wrapAdjective("!!!")
encouragingPromptFunction("terrific")


//CHALLENGE 3


let add = function(thingToAdd) {
    let base = 1;
    return  function() { return base + thingToAdd }
  
}(3)

let subtract = function(thingToSub) {
    let base = 1;
    return  function() { return base - thingToSub }
  
}(3)

let multiply = function(thingToMult) {
    let base = 1;
    return  function() { return base * thingToMult }
  
}(3)

let divide = function(thingToDiv) {
    let base = 10;
    return  function() { return base / thingToDiv }
  
}(5)
const Calculator = {add, subtract, multiply, divide}


//CHALLENGE 4

let intg = 4
let arr = []

function actionApplyer(intg, arr){
    if (arr.length > 0){
        return arr[2](arr[1](arr[0](intg)))
    }
    else {
      return intg
    }
  }

//Alternative Solution

  // function actionApplyer(intg, arr){
//   if (arr.length > 0){
//     let numTwo = arr[0](intg)
//     let numThree = arr[1](numTwo)
//     arr[2](numThree)
//   }
//   else {
//     return intg
//   }
// }
