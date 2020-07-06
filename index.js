function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  };
  
  function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  };
  
  function wrapAdjective(decor="*") {
    return ((adj="special") => { return `You are ${decor + adj + decor}!`})
  };
  
  
  const Calculator = {
    add: (a, b) => (a + b),
    subtract: (a, b) => (a - b),
    multiply: (a, b) => (a * b),
    divide: (a, b) => (a / b)
  };
  
  function actionApplyer(num, arr) {
    if(arr.length == 0) {
      return num;
    } else {
      for(let fn of arr) {
        num = fn(num)
      };
      return num;
    };
  };