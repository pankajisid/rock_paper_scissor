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
/* takes user choice 

function getHumanChoice(){
    let choice =prompt("Please enter the your choice (rock, paper or scissor) and if you want to quit : type quit :");
    return choice.toLowerCase();
}
/* two global variables (humanscore and computerscore) are declared with initial value zero */

let humanscore=0;
let computerscore=0;

function displayResult(msg){
    div.textContent = msg;
}


function playRound(str){
    const humanChoice=str;
    const computerChoice=getComputerChoice();
    if(humanChoice===computerChoice){
        displayResult("Tie");
    }
    else if(humanChoice==="rock" && computerChoice==="scissor"){
        displayResult("rock beat scissor");
        humanscore++;
    }
    else if(humanChoice==="scissor" && computerChoice==="rock"){
        computerscore++;
        displayResult("rock beat scissor");
    }
    else if(humanChoice==="rock" && computerChoice==="paper"){
        computerscore++;
        displayResult("paper beat rock");
    }
    else if(humanChoice==="paper" && computerChoice==="rock"){
        humanscore++;
        displayResult("paper beat rock");
    }
    else if(humanChoice==="paper" && computerChoice==="scissor"){
        computerscore++;
        displayResult("scissor beat paper");
    }
    else if(humanChoice==="scissor" && computerChoice==="paper"){
        humanscore++;
        displayResult("scissor beat paper");
    }
}



const body = document.querySelector("body");

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissor = document.createElement("button");

rock.textContent = "rock";
paper.textContent = "paper";
scissor.textContent = "scissor";


const div = document.createElement("div");

body.insertAdjacentElement('afterend', div);

let flag = true;
function result(){
    let score = Math.max(humanscore, computerscore);
    if(score===5) flag=false;
    if(humanscore===5 && score ===5){
        const p = document.createElement("p");
        p.textContent = `Human Wins with Score 5 and computerscore is ${computerscore}`;
        div.insertAdjacentElement('afterend', p);
    }
    else if(computerscore===5 && score ===5){
        const p = document.createElement("p");
        p.textContent = `computer Wins with Score 5 and humanscore is ${humanscore}`;
        div.insertAdjacentElement('afterend', p);
    }
}



rock.addEventListener('click', () =>{
    playRound("rock")
    result();
});
body.appendChild(rock);

paper.addEventListener('click', () =>{
    playRound("paper");
    result();
});

body.appendChild(paper);

scissor.addEventListener('click', () =>{
    playRound("scissor");
    result();
});

body.appendChild(scissor);





/*

let flag=true;

while(flag){
    playRound();
    if(getHumanChoice().toLowerCase()==="quit"){
        flag=false;
    }
}

console.log('HumanScore:', humanscore);
console.log('ComputerScore:',computerscore);

console.log((humanscore > computerscore)?"User wins":"Computer Wins");

*/