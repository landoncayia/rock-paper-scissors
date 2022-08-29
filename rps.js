function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"]
  let choice = Math.floor(Math.random() * 3);
  return options[choice];
}

function playRound(playerSelection, computerSelection) {
  // Normalize player input: first letter is uppercase, rest are lowercase
  playerSelection = playerSelection[0].toUpperCase()
    + playerSelection.substring(1);

  // Return -1 for player loss; 1 for player win; 0 for tie
  if (playerSelection == "Rock" && computerSelection == "Paper") {
    console.log("You Lose! Paper beats Rock");
    return -1;
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    console.log("You Win! Rock beats Scissors");
    return 1;
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    console.log("You Lose! Scissors beat Paper");
    return -1;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    console.log("You Win! Paper beats Rock");
    return 1;
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    console.log("You Lose! Rock beats Scissors");
    return -1;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    console.log("You Win! Scissors beat Paper");
    return 1;
  } else {
    console.log("It's a Tie!");
    return 0;
  }
}

function game() {
  // Playing five rounds; keep track of each player's score
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    result = playRound("Rock", "Scissors");
    console.log(result);
  }
}