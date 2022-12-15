console.log("Rock Paper Scissors");
//Get players Choice
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', e => {
        const userChoice = button.id;
        makeSelection(button.id)
    })
})

function makeSelection(userChoice) {
    console.log(userChoice)
}

function getComputerChoice() {
    const randomNumber = Math.floor((Math.random() * 3));
    //console.log(`Random Number: ${randomNumber}`);
    if (randomNumber == 1) {
        return "rock";
    } else if(randomNumber == 2) {
        return "paper";
    } else {
        return "sissors";
    }
 }
  
 function getUserChoice(){
    let validInput = false
    while (validInput == false){
        const choice = prompt("Rock, Paper, or Scissors? ").toLowerCase();
        if (choice == "rock" || choice == "paper" || choice == "scissors") {
            validInput = true;
            return choice;
        }
    }
 }
  
 function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Tie";
    } else if (
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "sissors" && computerChoice === "rock") ||
        (userChoice === "paper" && computerChoice === "sissors")
    ){
        return "Computer";
    } else {
        return "Player";
    }      
 }
  
 function playRound(userChoice, computerChoice) {
    let result = getWinner(userChoice, computerChoice);
    if (result === "Player") {
        return `${result} Wins! ${userChoice} beats ${computerChoice}`;
    } else if (result === "Computer") {
        return `${result} Wins! ${computerChoice} beats ${userChoice}; `;
    } else {
        return `It's a Tie. You picked ${userChoice} and computer picked ${computerChoice}`;
    }
 }
  
 function game() {
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
 game();


