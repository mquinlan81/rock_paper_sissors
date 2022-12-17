//Get Player Choice
let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')
//let container = document.querySelector('#container')

function getComputerChoice() {
   const randomNumber = Math.floor((Math.random() * 3));
   console.log(`Random Number: ${randomNumber}`);
   if (randomNumber == 0) {
       return "rock";
   } else if(randomNumber == 1) {
       return "paper";
   } else {
       return "scissors";
   }
}
 
/*function getUserChoice(){
   let validInput = false
   while (validInput == false){
       const choice = prompt("Rock, Paper, or Scissors? ").toLowerCase();
       if (choice == "rock" || choice == "paper" || choice == "scissors") {
           validInput = true;
           return choice;
       }
   }
}*/
 
function getWinner(userChoice, computerChoice) {
   if (userChoice === computerChoice) {
       return "Tie";
   } else if (
       (userChoice === "rock" && computerChoice === "paper") ||
       (userChoice === "scissors" && computerChoice === "rock") ||
       (userChoice === "paper" && computerChoice === "scissors")
   ){
       return "Computer";
   } else {
       return "Player";
   }      
}
 
function playRound(userChoice, computerChoice) {
  const container = document.querySelector('#container')
  //const player = outcome.createElement('p');
  //const computer = outcome.createElement('p');
  //const outcome = document.createElement('p');
  let result = getWinner(userChoice, computerChoice);
  
  if (result === "Player") {
    const outcome = document.createElement('p');
    outcome.classList.add('content')
    outcome.textContent = `${result} Wins! ${userChoice} beats ${computerChoice}`;
    container.appendChild(outcome);    
    return `${result} Wins! ${userChoice} beats ${computerChoice}`;
   
  } else if (result === "Computer") {
    const outcome = document.createElement('p');
    outcome.classList.add('content')
    outcome.textContent = `${result} Wins! ${computerChoice} beats ${userChoice}`;
    container.appendChild(outcome);  
    return `${result} Wins! ${computerChoice} beats ${userChoice}`;
   
  } else {
    const outcome = document.createElement('p');
    outcome.classList.add('content')
    outcome.textContent = `It's a Tie. You picked ${userChoice} and computer picked ${computerChoice}`;
    container.appendChild(outcome);
    return `It's a Tie. You picked ${userChoice} and computer picked ${computerChoice}`;
   }
}
 
rock.addEventListener('click', () => {
  const userChoice = rock.id;
  const computerChoice = getComputerChoice();
  console.log(playRound(userChoice, computerChoice));
});

paper.addEventListener('click', () => {
  const userChoice = paper.id;
  const computerChoice = getComputerChoice();
  console.log(playRound(userChoice, computerChoice));
});

scissors.addEventListener('click', () => {
  const userChoice = scissors.id;
  const computerChoice = getComputerChoice();
  console.log(playRound(userChoice, computerChoice));
});

/*function game() {
   let playerScore = 0;
   let compScore = 0;
   for (let i = 0; i < 5; i++){
       const userChoice = getUserChoice();
       const computerChoice = getComputerChoice();
       console.log(`Player: ${userChoice} / Computer: ${computerChoice}`);
       console.log(playRound(userChoice, computerChoice));
       console.log("----------");
       if (getWinner(userChoice, computerChoice) == "Player") {
           playerScore++
       } else if (getWinner(userChoice, computerChoice) == "Computer") {
           compScore++
       }
   }
   console.log("GAME OVER");
   if (playerScore > compScore) {
       console.log(`Player Wins! ${playerScore} - ${compScore}`)
   } else if (playerScore < compScore) {
       console.log(`Computer Wins! ${compScore} - ${playerScore}`)
   } else {
       console.log(`It's a Tie! ${compScore} - ${playerScore}`)
   }
}
game();*/