function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"]
  let choice = Math.floor(Math.random() * 3);
  return options[choice];
}

function playRound(playerSelection, computerSelection) {
  // Normalize player input: first letter is uppercase, rest are lowercase
  playerSelection = playerSelection[0].toUpperCase()
    + playerSelection.substring(1);

  if (playerSelection == "Rock" && computerSelection == "Paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    return "You Lose! Scissors beat Paper";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return "You Win! Scissors beat Paper";
  } else {
    return "It's a Tie!";
  }
}