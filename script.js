function getComputerChoice() {
   let random = Math.random();
   if (random <= 1/3) {
      return "rock";
   } else if (random <= 2/3) {
      return "paper";
   } else {
      return "scissors";
   }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
   if (humanChoice == "paper" && computerChoice == "rock") {
      humanScore++;
      return `${humanScore} : ${computerScore}`;
   } else if (humanChoice == "rock" && computerChoice == "paper") {
      computerScore++;
      return `${humanScore} : ${computerScore}`;
   } else if (humanChoice == "scissors" && computerChoice == "paper") {
      humanScore++;
      return `${humanScore} : ${computerScore}`;
   } else if (humanChoice == "paper" && computerChoice == "scissors") {
      computerScore++;
      return `${humanScore} : ${computerScore}`;
   } else if (humanChoice == "rock" && computerChoice == "scissors") {
      humanScore++;
      return `${humanScore} : ${computerScore}`;
   } else if (humanChoice == "scissors" && computerChoice == "rock") {
      computerScore++;
      return `${humanScore} : ${computerScore}`;
   } else {
      return (`${humanScore} : ${computerScore}`);
   }
}

const options = document.querySelector("#options");
const results = document.querySelector("#results");
const choices = document.querySelector("#choices");

options.addEventListener("click", (e) => {
   let target = e.target;
   
   switch (target.id) {
      case "rock":
         let computerChoice = getComputerChoice();
         choices.textContent = `Choices:  You  rock : ${computerChoice}  Computer`;
         let choice = playRound("rock", computerChoice);
         results.textContent = `Results:  You  ${choice}  Computer`;
         break;
      case "paper":
         let computerChoice2 = getComputerChoice();
         choices.textContent = `Choices:  You  paper : ${computerChoice2}  Computer`;
         let choice2 = playRound("paper", computerChoice2);
         results.textContent = `Results:  You  ${choice2}  Computer`;
         break;
      case "scissors":
         let computerChoice3 = getComputerChoice();
         choices.textContent = `Choices:  You  scissors : ${computerChoice3}  Computer`;
         let choice3 = playRound("scissors", computerChoice3);
         results.textContent = `Results:  You  ${choice3}  Computer`;
         break;
      default:
         break;
    }
    const finalResults = document.querySelector("#finalResults");

    if (humanScore == 10) {
       let humanWin = `Final Score is:  You  ${humanScore} : ${computerScore}  Computer\nHuman Wins!`;
       finalResults.textContent = (humanWin);
    } else if (computerScore == 10){
       let computerWin = `Final Score is: Human ${humanScore} : ${computerScore} Computer\nComputer Wins!`;
       finalResults.textContent = computerWin;
    };

    finalResults.style.whiteSpace = "pre-line";
});
