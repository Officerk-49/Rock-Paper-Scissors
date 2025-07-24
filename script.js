function getComputerChoise() {
   let random = Math.random();
   if (random <= 0.4) {
      return "rock";
   } else if (random <= 0.7) {
      return "paper";
   } else {
      return "scissors";
   }
}

function getHumanChoise() {
   let userChoice = prompt("rock, paper, scissors. You Choose:");
   if (userChoice == "rock") {
      return "rock";
   } else if (userChoice == "paper") {
      return "paper";
   } else {
      return "scissors";
   }
}

function playGame() {
   let humanScore = 0;
   let computerScore = 0;
   function playRound(humanChoise, computerChoise) {
      if (humanChoise == "paper" && computerChoise == "rock") {
         humanScore++;
         return `${humanScore} : ${computerScore}`;
      } else if (humanChoise == "rock" && computerChoise == "paper") {
         computerScore++;
         return `${humanScore} : ${computerScore}`;
      } else if (humanChoise == "scissors" && computerChoise == "paper") {
         humanScore++;
         return `${humanScore} : ${computerScore}`;
      } else if (humanChoise == "paper" && computerChoise == "scissors") {
         computerScore++;
         return `${humanScore} : ${computerScore}`;
      } else if (humanChoise == "rock" && computerChoise == "scissors") {
         humanScore++;
         return `${humanScore} : ${computerScore}`;
      } else if (humanChoise == "scissors" && computerChoise == "rock") {
         computerScore++;
         return `${humanScore} : ${computerScore}`;
      } else {
         return `${humanScore} : ${computerScore}`;
      }
   }
   let humanChoise1 = getHumanChoise();
   let humanChoise2 = getHumanChoise();
   let humanChoise3 = getHumanChoise();
   let humanChoise4 = getHumanChoise();
   let humanChoise5 = getHumanChoise();

   let computerChoise1 = getComputerChoise();
   let computerChoise2 = getComputerChoise();
   let computerChoise3 = getComputerChoise();
   let computerChoise4 = getComputerChoise();
   let computerChoise5 = getComputerChoise();

   console.log(computerChoise1);
   console.log(humanChoise1);
   console.log(playRound(humanChoise1, computerChoise1));
   console.log(computerChoise2);
   console.log(humanChoise2);
   console.log(playRound(humanChoise2, computerChoise2));
   console.log(computerChoise3);
   console.log(humanChoise3);
   console.log(playRound(humanChoise3, computerChoise3));
   console.log(computerChoise4);
   console.log(humanChoise4);
   console.log(playRound(humanChoise4, computerChoise4));
   console.log(computerChoise5);
   console.log(humanChoise5);
   console.log(playRound(humanChoise5, computerChoise5));

   if (humanScore > computerScore) {
      let humanWin = `Final Score is: Human ${humanScore} : ${computerScore} Computer\nHuman Wins`;
      return humanWin;
   } else if (humanScore < computerScore) {
      let computerWin = `Final Score is: Human ${humanScore} : ${computerScore} Computer\nComputer Wins`;
      return computerWin;
   } else {
      return "Draw";
   }
}

console.log(playGame())

