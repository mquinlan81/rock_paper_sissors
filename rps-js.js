const buttons = document.querySelectorAll('button')
const gameBoard = document.querySelector('#game-board')
const computer = document.querySelector('#computer')
const player = document.querySelector('#player')
const gameResult = document.getElementById('game-result');
const pWin = document.querySelector('#p-win')
const cWin = document.querySelector('#c-win')
const tie = document.querySelector('#tie')
const gameOver = document.querySelector('#game-over')
const restartGame = document.querySelector('#restart-game')
let playerScore = 0;
let computerScore = 0;


//Get computer Choice
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

//Get game winner
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
        //increment player score by 1
        playerScore++;
        //Show game result above
        pWin.style.display = "block";
        cWin.style.display = "none";
        tie.style.display = "none";
        //Show player choice
        const pPick = document.createElement('p');
        pPick.style.cssText = 'font-weight: bold; scale: 1.2';
        pPick.textContent = `${userChoice}`;
        player.appendChild(pPick);
        //Show computer choice
        const cPick = document.createElement('p');
        cPick.style.cssText = 'color: #444';
        cPick.textContent = `${computerChoice}`;
        computer.appendChild(cPick);
        console.log(playerScore, computerScore)
        
    } else if (result === "Computer") {
        //increment computer score by 1
        computerScore++;
        //Show game result above
        pWin.style.display = "none";
        cWin.style.display = "block";
        tie.style.display = "none";
        //Show player choice
        const pPick = document.createElement('p');
        pPick.style.cssText = 'color: #444';
        pPick.textContent = `${userChoice}`;
        player.appendChild(pPick);
        //show computer choice
        const cPick = document.createElement('p');
        cPick.style.cssText = 'font-weight: bold; scale: 1.2';
        cPick.textContent = `${computerChoice}`;
        computer.appendChild(cPick);
        console.log(playerScore, computerScore)
        
    } else {
        //Show game result above
        pWin.style.display = "none";
        cWin.style.display = "none";
        tie.style.display = "block";
        //Show player Choice
        const pPick = document.createElement('p');
        pPick.textContent = `${userChoice}`;
        player.appendChild(pPick);
        //Show computer choice
        const cPick = document.createElement('p');
        cPick.textContent = `${computerChoice}`;
        computer.appendChild(cPick);
        console.log(playerScore, computerScore)   
    }
}  

buttons.forEach(button => button.addEventListener('click', () => {
    const userChoice = button.id;
    const computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
}));
