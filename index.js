// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }
  
  let wrapAdjective = function(string="*") {
    return function(magic='special') {
      return `You are ${string}${magic}${string}!`
    }
  }
  
  const Calculator = {
    add: function(num1, num2) {
      return num1 + num2;
    },
    subtract: function(num1, num2) {
      return num1 - num2;
    },
    multiply: function(num1, num2) {
      return num1 * num2;
    },
    divide: function(num1, num2) {
      return num1 / num2;
    }
  }
  
  
  function actionApplyer(startInt, array) {
    let num = startInt;
  
    for (let i = 0; i < array.length; i++) {
      num = array[i](num);
    }
  
    return num;
  }