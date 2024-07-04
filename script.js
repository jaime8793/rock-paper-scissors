// Function to get computer choice
let compChoice = "";
function computerChoice() {
  // Get random number variable and initialize it
  const randomNumber = Math.random();

  // If statement to get comp choice
  if (randomNumber < 1 / 3) {
    console.log("Rock");
    compChoice = "Rock";
  } else if (randomNumber < 2 / 3) {
    console.log("Scissors");
    compChoice = "Scissors";
  } else {
    console.log("Paper");
    compChoice = "Paper";
  }
  return compChoice;
}

// Function to get human choice
let humanChoice = "";
function humanChoiceRockFunction() {
  humanChoice = document.getElementById("rpsButtonRock").innerText;
}
function humanChoicePaperFunction() {
  humanChoice = document.getElementById("rpsButtonPaper").innerText;
}
function humanChoiceScissorsFunction() {
  humanChoice = document.getElementById("rpsButtonScissors").innerText;
}
// Play round function
let humanScore = 0;
let compScore = 0;
let winOrLose = "";
function playRound() {
  if (compChoice === "Rock") {
    if (humanChoice === "PAPER") {
      winOrLose = "Paper beats Rock you win";
      humanScore++;
      compScore--;
    } else if (humanChoice === "ROCK") {
      winOrLose = "Both chose rock it is a Tie";
      humanScore += 0.5;
      compScore += 0.5;
    } else if (humanChoice === "SCISSORS") {
      winOrLose = "Rock beats scissors you lose";
      humanScore--;
      compScore++;
    }
  } else if (compChoice === "Paper") {
    if (humanChoice === "PAPER") {
      winOrLose = "Both chose paper it is a Tie";
      humanScore += 0.5;
      compScore += 0.5;
    } else if (humanChoice === "ROCK") {
      winOrLose = "Paper beats rock you lose";
      humanScore--;
      compScore++;
    } else if (humanChoice === "SCISSORS") {
      winOrLose = "Scissors beats rock you win";
      humanScore++;
      compScore--;
    }
  } else if (compChoice === "Scissors") {
    if (humanChoice === "PAPER") {
      winOrLose = "Scissors beats paper you lose";
      humanScore--;
      compScore++;
    } else if (humanChoice === "ROCK") {
      winOrLose = "Rock beats scissors you win";
      humanScore++;
      compScore--;
    } else if (humanChoice === "SCISSORS") {
      winOrLose = "Both chose scissors it is a Tie";
      humanScore += 0.5;
      compScore += 0.5;
    }
  }
  document.getElementById("yourChoice").innerText = winOrLose;
  document.getElementById("compScore").innerText = `Your Score: ${humanScore}`;
  document.getElementById("yourScore").innerText = `Comp Score: ${compScore}`;
  if (humanScore >= 5) {
    document.getElementById("yourChoice").innerText =
      "You Win Scores will reset";
    humanScore = 0;
    compScore = 0;
  }
  if (compScore >= 5) {
    document.getElementById("yourChoice").innerText =
      "Comp Wins Scores will reset";
    humanScore = 0;
    compScore = 0;
  }
}
