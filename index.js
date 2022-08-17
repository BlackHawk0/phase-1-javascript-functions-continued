// code your solution here
// function saturdayFun 
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}


function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(adjective) {
  if (adjective === "*") {
    return () => `You are ${adjective}a hard worker${adjective}!`;                         // alternatie      // const asterick = () => `You are ${adjective}a hard worker${adjective}!`; return asterick;
  } else if (adjective === "||") {
    return () => `You are ${adjective}a dedicated programmer${adjective}!`;                 //alternative     // const pipe = () => `You are ${adjective}a dedicated programmer${adjective}!`; return pipe;
    }
}











// Alternative for easier readability of code


// function wrapAdjective(adjective="special"){
//     if(adjective==="*"){
//         return function(){
//             return `You are ${adjective}a hard worker${adjective}!`;
//         }
//     }else if (adjective ==="||" ){
//         return function(){
//             return `You are ${adjective}a dedicated programmer${adjective}!`; 
//         }
//     }
// }
