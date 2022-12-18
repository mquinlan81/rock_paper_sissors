let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')
let gameBoard = document.querySelector('#game-board')
let computer = document.querySelector('#computer')
let player = document.querySelector('#player')



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

    let result = getWinner(userChoice, computerChoice);
  
    if (result === "Player") {
        const pPick = document.createElement('p');
        pPick.style.cssText = 'font-weight: bold; scale: 1.2';
        pPick.textContent = `${userChoice}`;
        player.appendChild(pPick);

        const cPick = document.createElement('p');
        cPick.style.cssText = 'color: #444';
        cPick.textContent = `${computerChoice}`;
        computer.appendChild(cPick);

        const gameResult = document.querySelector('#game-result');
        gameResult.textContent = `${result} Wins!`;
        gameBoard.appendChild(gameResult);

    } else if (result === "Computer") {
        const pPick = document.createElement('p');
        pPick.style.cssText = 'color: #444';
        pPick.textContent = `${userChoice}`;
        player.appendChild(pPick);

        const cPick = document.createElement('p');
        cPick.style.cssText = 'font-weight: bold; scale: 1.2';
        cPick.textContent = `${computerChoice}`;
        computer.appendChild(cPick);

        const gameResult = document.querySelector('#game-result');
        gameResult.textContent = `${result} Wins!`;
        gameBoard.appendChild(gameResult);
   
    } else {
        const pPick = document.createElement('p');
        pPick.textContent = `${userChoice}`;
        player.appendChild(pPick);

        const cPick = document.createElement('p');
        cPick.textContent = `${computerChoice}`;
        computer.appendChild(cPick);

        const gameResult = document.querySelector('#game-result');
        gameResult.textContent = "It's a Tie";
        gameBoard.appendChild(gameResult);
    }
}

function keepScore () {
    let playerScore = 0;
    let compScore = 0;

        if (getWinner(userChoice, computerChoice) == "Player") {
            playerScore++
        } else if (getWinner(userChoice, computerChoice) == "Computer") {
            compScore++
        } 

    console.log(playerScore);
    console.log(compScore);

}

rock.addEventListener('click', () => {
    const userChoice = rock.id;
    const computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
});

paper.addEventListener('click', () => {
  const userChoice = paper.id;
  const computerChoice = getComputerChoice();
  playRound(userChoice, computerChoice);
});

scissors.addEventListener('click', () => {
  const userChoice = scissors.id;
  const computerChoice = getComputerChoice();
  playRound(userChoice, computerChoice);
});