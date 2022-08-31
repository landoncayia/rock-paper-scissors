// Keep track of each player's score
let playerScore = 0;
let computerScore = 0;

// "Holder" variable for the result of each round
let roundResult;

const optionButtons = document.querySelectorAll('.button-container > button');
const displayPlayerScore = document.querySelector('#player-score');
const displayComputerScore = document.querySelector('#computer-score');
const results = document.querySelector('.results');

function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"]
  let choice = Math.floor(Math.random() * 3);
  return options[choice];
}

function playRound(playerSelection, computerSelection) {
  // Normalize player input: first letter is uppercase, rest are lowercase
  playerSelection = playerSelection[0].toUpperCase()
    + playerSelection.substring(1);

  const msg = document.createElement('p');

  // Return -1 for player loss; 1 for player win; 0 for tie
  if (playerSelection == "Rock" && computerSelection == "Paper") {
    msg.textContent = "You Lose! Paper beats Rock";
    results.appendChild(msg);
    return -1;
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    msg.textContent = "You Win! Rock beats Scissors";
    results.appendChild(msg);
    return 1;
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    msg.textContent = "You Lose! Scissors beat Paper";
    results.appendChild(msg);
    return -1;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    msg.textContent = "You Win! Paper beats Rock";
    results.appendChild(msg);
    return 1;
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    msg.textContent = "You Lose! Rock beats Scissors";
    results.appendChild(msg);
    return -1;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    msg.textContent = "You Win! Scissors beat Paper";
    results.appendChild(msg);
    return 1;
  } else {
    msg.textContent = "It's a Tie!";
    results.appendChild(msg);
    return 0;
  }
}

function updateScores(result) {
  if (result === 1) {
    playerScore++;
    displayPlayerScore.innerText = `Player score: ${playerScore}`;
  } else if (result === -1) {
    computerScore++;
    displayComputerScore.innerText = `Computer score: ${computerScore}`;
  }
}

optionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    roundResult = playRound(button.id, getComputerChoice());
    updateScores(roundResult);
  });
});

// if (playerScore > computerScore) {
//   console.log("You Won!")
// } else if (playerScore < computerScore) {
//   console.log("You Lost!");
// } else {
//   console.log("The game ends in a Tie!");
// }

// console.log("Your final score is " + playerScore);
// console.log("The computer's final score is " + computerScore);
