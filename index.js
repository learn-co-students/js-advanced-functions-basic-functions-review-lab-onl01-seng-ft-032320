// Your code here

let Calculator = {
   add: (a,b) => {return a+b},
   subtract: (a,b) => {return a-b},
   multiply: (a,b)=> {return a*b},
   divide: (a,b) => {return a/b}
}

function saturdayFun(activity = "roller-skate"){
   return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office"){
   return `This Monday, I will ${activity}.`  
}

let wrapAdjective = function(flair = "*") {
   return function(value = "special"){
      return `You are ${flair}${value}${flair}!`
   }
}


function actionApplyer(int, array) {
   if (array.length === 0){
      return int
   } else {
      array.forEach(arr => {
         int = arr(int)
      });
      return int
   }
}