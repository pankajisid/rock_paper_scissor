/* produce computer choice based on random number generate by Math.random() function uniformly in (0,1) */
function getComputerChoice(){
    let number =Math.random();
    if(number<=0.3){
        return "rock";
    }
    else if(number<=0.65){
        return "paper";
    }
    else {
        return "scissor";
    }
}
/* takes user choice */

function getHumanChoice(){
    let choice =prompt("Please enter the your choice (rock, paper or scissor) and if you want to quit : type quit :");
    return choice.toLowerCase();
}
/* two global variables (humanscore and computerscore) are declared with initial value zero */

let humanscore=0;
let computerscore=0;


function playRound(){
    const humanChoice=getHumanChoice();
    const computerChoice=getComputerChoice();
    if(humanChoice===computerChoice){
        console.log("Tie");
    }
    else if(humanChoice==="rock" && computerChoice==="scissor"){
        humanscore++;
        console.log("rock beat scissor");
    }
    else if(humanChoice==="scissor" && computerChoice==="rock"){
        computerscore++;
        console.log("rock beat scissor");
    }
    else if(humanChoice==="rock" && computerChoice==="paper"){
        computerscore++;
        console.log("paper beat rock");
    }
    else if(humanChoice==="paper" && computerChoice==="rock"){
        humanscore++;
        console.log("paper beat rock");
    }
    else if(humanChoice==="paper" && computerChoice==="scissor"){
        computerscore++;
        console.log("scissor beat paper");
    }
    else if(humanChoice==="scissor" && computerChoice==="paper"){
        humanscore++;
        console.log("scissor beat paper");
    }
}

let flag=true;
/* this functions takes care how long user wants to play */
while(flag){
    playRound();
    if(getHumanChoice().toLowerCase()==="quit"){
        flag=false;
    }
}

console.log('HumanScore:', humanscore);
console.log('ComputerScore:',computerscore);

console.log((humanscore > computerscore)?"User wins":"Computer Wins");