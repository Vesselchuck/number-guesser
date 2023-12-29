let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (human, computer, target) => {
  switch (true) {
    case Math.abs(target - human) > Math.abs(target - computer):
      return false;
      break;
    case Math.abs(target - human) < Math.abs(target - computer):
      return true;
      break;
    case Math.abs(target - human) === Math.abs(target - computer):
      return true;
      break;
  
    default:
      return "Error: human, computer or target parameter is wrong.";
      break;
  }
};

const updateScore = winner => {
switch (winner) {
  case "human":
    humanScore++;
    break;
  case "computer":
    computerScore++;
    break;

  default:
    return "Error: winner parameter is wrong.";
    break;
}
};

const advanceRound = () => currentRoundNumber++;