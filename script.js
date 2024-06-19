const humanChoiceEl = document.querySelector(`#human-choice`);
const computerChoiceEl = document.querySelector(`#computer-choice`);
const humanScoreEl = document.querySelector(`#human-score`);
const computerScoreEl = document.querySelector(`#computer-score`);
const roundOutcomeEl = document.querySelector(`#round-outcome`);
const gameOutcomeEl = document.querySelector(`#game-outcome`);
const humanChoseRock = document.querySelector(`#rock`);
const humanChosePaper = document.querySelector(`#paper`);
const humanChoseScissors = document.querySelector(`#scissors`);
const newGameBtn = document.querySelector("#newgamebtn");
let getHumanChoice = ``;
let computerChoice = ``;
let humanScore = 0;
let computerScore = 0;

const playGame = function () {
  let getComputerChoice = function () {
    const choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
      computerChoiceEl.innerHTML = `<img id="rockimage" src="cave-painting.png" alt="rock" />`;
      computerChoice = `rock`;
    } else if (choice === 2) {
      computerChoiceEl.innerHTML = `<img id="paperimage" src="new-document.png" alt="paper" />`;
      computerChoice = `paper`;
    } else if (choice === 3) {
      computerChoiceEl.innerHTML = `<img id="scissorsimage" src="scissor.png" alt="scissors" />`;
      computerChoice = `scissors`;
    }
  };

  humanChoseRock.addEventListener(`click`, function () {
    humanChoiceEl.innerHTML = `<img id="rockimage" src="cave-painting.png" alt="rock" />`;
    getHumanChoice = `rock`;
    playRound();
  });
  humanChosePaper.addEventListener(`click`, function () {
    humanChoiceEl.innerHTML = `<img id="paperimage" src="new-document.png" alt="paper" />`;
    getHumanChoice = `paper`;
    playRound();
  });
  humanChoseScissors.addEventListener(`click`, function () {
    humanChoiceEl.innerHTML = `<img id="scissorsimage" src="scissor.png" alt="scissors" />`;
    getHumanChoice = `scissors`;
    playRound();
  });

  newGameBtn.addEventListener(`click`, function () {
    getHumanChoice = ``;
    computerChoice = ``;
    humanScore = 0;
    computerScore = 0;
    computerChoiceEl.innerHTML = `COMPUTER`;
    humanChoiceEl.innerHTML = `HUMAN`;
    computerScoreEl.innerHTML = 0;
    humanScoreEl.innerHTML = 0;
    roundOutcomeEl.innerHTML = ``;
    gameOutcomeEl.innerHTML = ``;
  });

  const playRound = function () {
    if (humanScore < 5 && computerScore < 5) {
      getComputerChoice();
      if (getHumanChoice === `rock` && computerChoice === `paper`) {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        roundOutcomeEl.textContent = `Computer wins the round`;
      } else if (getHumanChoice === `rock` && computerChoice === `scissors`) {
        humanScore++;
        humanScoreEl.textContent = humanScore;
        roundOutcomeEl.textContent = `Human wins the round`;
      } else if (getHumanChoice === `rock` && computerChoice === `rock`) {
        roundOutcomeEl.textContent = `No one wins`;
      }

      if (getHumanChoice === `paper` && computerChoice === `scissors`) {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        roundOutcomeEl.textContent = `Computer wins the round`;
      } else if (getHumanChoice === `paper` && computerChoice === `rock`) {
        humanScore++;
        humanScoreEl.textContent = humanScore;
        roundOutcomeEl.textContent = `Human wins the round`;
      } else if (getHumanChoice === `paper` && computerChoice === `paper`) {
        roundOutcomeEl.textContent = `No one wins`;
      }

      if (getHumanChoice === `scissors` && computerChoice === `rock`) {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        roundOutcomeEl.textContent = `Computer wins the round`;
      } else if (getHumanChoice === `scissors` && computerChoice === `paper`) {
        humanScore++;
        humanScoreEl.textContent = humanScore;
        roundOutcomeEl.textContent = `Human wins the round`;
      } else if (
        getHumanChoice === `scissors` &&
        computerChoice === `scissors`
      ) {
        roundOutcomeEl.textContent = `No one wins`;
      }
      if (humanScore === 5 || computerScore === 5) {
        gameOutcomeEl.textContent = `GAME FINISHED!`;
        if (humanScore === 5) {
          roundOutcomeEl.textContent = `Human wins the game!`;
        } else if (computerScore === 5) {
          roundOutcomeEl.textContent = `Computer wins the game!`;
        }
      }
    }
  };
};

playGame();
