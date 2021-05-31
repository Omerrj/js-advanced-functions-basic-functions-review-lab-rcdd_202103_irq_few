// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (activity="go to the office")=> 
   `This Monday, I will ${activity}.`;


const wrapAdjective =(style="*") => (adjective="special")=> 
     `You are ${style}${adjective}${style}!`;
  
  
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

let actionApplyer = function(start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
}