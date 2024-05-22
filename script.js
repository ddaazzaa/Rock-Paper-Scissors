console.log("Hello World");

const getComputerChoice = function () {
  const choice = Math.floor(Math.random() * 3) + 1;
  if (choice === 1) {
    return `rock`;
  } else if (choice === 2) {
    return `paper`;
  } else if (choice === 3) {
    return `scissors`;
  }
};

const getHumanChoice = function () {
  const choice = prompt(`Rock, Paper, Scissors?`);
  return choice;
};

let humanScore = 0;
let computerScore = 0;

function playGame() {
  for (i = 0; i < 5; i++) {
    const playRound = function (humanChoice, computerChoice) {
      if (humanChoice.toLowerCase() === `rock` && computerChoice === `paper`) {
        computerScore++;
        console.log(`Computer wins Paper beats Rock`);
      } else if (
        humanChoice.toLowerCase() === `rock` &&
        computerChoice === `scissors`
      ) {
        humanScore++;
        console.log(`Human wins Rock beats Scissors`);
      } else if (
        humanChoice.toLowerCase() === `rock` &&
        computerChoice === `rock`
      ) {
        console.log(`No one wins`);
      } else if (
        humanChoice.toLowerCase() === `paper` &&
        computerChoice === `paper`
      ) {
        console.log(`No one wins`);
      } else if (
        humanChoice.toLowerCase() === `paper` &&
        computerChoice === `scissors`
      ) {
        computerScore++;
        console.log(`Computer wins Scissors beats Paper`);
      } else if (
        humanChoice.toLowerCase() === `paper` &&
        computerChoice === `rock`
      ) {
        humanScore++;
        console.log(`Human wins Paper beats Rock`);
      } else if (
        humanChoice.toLowerCase() === `scissors` &&
        computerChoice === `paper`
      ) {
        humanScore++;
        console.log(`Human wins Scissors beats Paper`);
      } else if (
        humanChoice.toLowerCase() === `scissors` &&
        computerChoice === `scissors`
      ) {
        console.log(`No one wins`);
      } else if (
        humanChoice.toLowerCase() === `scissors` &&
        computerChoice === `rock`
      ) {
        computerScore++;
        console.log(`Computer wins Rock beats Scissors`);
      }
    };

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}

playGame();
