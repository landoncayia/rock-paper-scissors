// Keep track of each player's score
let playerScore = 0;
let computerScore = 0;

// "Holder" variable for the result of each round
let roundResult;

let gameOver = false;

const optionButtons = document.querySelectorAll('.button-container > button');
const displayPlayerScore = document.querySelector('#player-score');
const displayComputerScore = document.querySelector('#computer-score');
const results = document.querySelector('.results');

/*
Randomly chooses between rock, paper, and scissors for the computer's choice.
*/
function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"]
  let choice = Math.floor(Math.random() * 3);
  return options[choice];
}

/*
Plays one round of the game, taking in a player move choice and a computer move
choice (rock, paper, or scissors).
*/
function playRound(playerSelection, computerSelection) {
  // Normalize player input: first letter is uppercase, rest are lowercase
  playerSelection = playerSelection[0].toUpperCase()
    + playerSelection.substring(1);

  // Return -1 for player loss; 1 for player win; 0 for tie
  if (playerSelection == "Rock" && computerSelection == "Paper") {
    results.lastChild.innerText = "You: Rock\nComputer: Paper\nYou Lose!";
    return -1;
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    results.lastChild.innerText = "You: Rock\nComputer: Scissors\nYou Win!";
    return 1;
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    results.lastChild.innerText = "You: Paper\nComputer: Scissors\n You Lose!";
    return -1;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    results.lastChild.innerText = "You: Paper\nComputer: Rock\n You Win!";
    return 1;
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    results.lastChild.innerText = "You: Scissors\nComputer: Rock\nYou Lose!";
    return -1;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    results.lastChild.innerText = "You: Scissors\nComputer: Paper\nYou Win!";
    return 1;
  } else if (playerSelection == "Rock" && computerSelection == "Rock") {
    results.lastChild.innerText = "You: Rock\nComputer: Rock\nIt's a Tie!";
    return 0;
  } else if (playerSelection == "Paper" && computerSelection == "Paper") {
    results.lastChild.innerText = "You: Paper\nComputer: Paper\nIt's a Tie!";
  } else if (playerSelection == "Scissors" &&
             computerSelection == "Scissors") {
    results.lastChild.innerText = "You: Scissors\nComputer: Scissors\n" +
      "It's a tie!";
  }
}

/*
Updates the score variables and the live scores on the page based on the
result of the round, which is passed in.
*/
function updateScores(result) {
  if (result === 1) {
    playerScore++;
    displayPlayerScore.innerText = `Player score: ${playerScore}`;
  } else if (result === -1) {
    computerScore++;
    displayComputerScore.innerText = `Computer score: ${computerScore}`;
  }
}

/* 
Checks if either player has reached five points or not. Returns true if so,
false if not.
*/
function checkGameOver() {
  const msg = document.createElement('p');

  if (playerScore == 5) {
    msg.textContent = 'Game Over—You Won!';
    results.appendChild(msg);
    return true;
  } else if (computerScore == 5) {
    msg.textContent = 'Game Over—You Lost!';
    results.appendChild(msg);
    return true;
  }
  return false;
}

/*
Sets ability to click option buttons. If state is true, buttons are disabled;
otherwise, buttons are enabled.
*/
function disableOptionButtons(state) {
  optionButtons.forEach((button) => {
      button.disabled = state;
  })
}

optionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    disableOptionButtons(true);
    const msg = document.createElement('p');
    msg.textContent = 'Computer is thinking...';
    results.appendChild(msg);
    if (!gameOver) {
      setTimeout(() => {
        roundResult = playRound(button.id, getComputerChoice());
        disableOptionButtons(false);
        updateScores(roundResult);
        gameOver = checkGameOver();
        if (gameOver) {
          disableOptionButtons(true);
        }
      }, 1000);
    }
  });
});

// console.log("Your final score is " + playerScore);
// console.log("The computer's final score is " + computerScore);
