// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (activity="go to the office")=> 
   `This Monday, I will ${activity}.`;


const wrapAdjective =(style="*") =>{
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}
