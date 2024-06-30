// Function to get computer choice
let compChoice = "";
function computerChoice() {
  // Get random number variable and initialize it
  const randomNumber = Math.random();
  console.log(randomNumber);
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
function humanChoiceFunction() {
  // Prompt user
  humanChoice = prompt("Please pick a move").toLowerCase();
}

// Play round function
let humanScore = 0;
let compScore = 0;
function playRound() {
  if (compChoice === "Rock") {
    if (humanChoice === "paper") {
      console.log("Paper beats Rock you win");
      humanScore++;
      compScore--;
      console.log(humanScore);
    } else if (humanChoice === "rock") {
      console.log("Both chose rock it is a Tie");
      humanScore += 0.5;
      compScore += 0.5;
      console.log(humanScore);
    } else if (humanChoice === "scissors") {
      console.log("Rock beats scissors you lose");
      humanScore--;
      compScore++;
      console.log(humanScore);
    }
  } else if (compChoice === "Paper") {
    if (humanChoice === "paper") {
      console.log("Both chose paper it is a Tie");
      humanScore += 0.5;
      compScore += 0.5;
      console.log(humanScore);
    } else if (humanChoice === "rock") {
      console.log("Paper beats rock you lose");
      humanScore--;
      compScore++;
      console.log(humanScore);
    } else if (humanChoice === "scissors") {
      console.log("Scissors beats rock you win");
      humanScore++;
      compScore--;
      console.log(humanScore);
    }
  } else if (compChoice === "Scissors") {
    if (humanChoice === "paper") {
      console.log("Scissors beats paper you lose");
      humanScore--;
      compScore++;
      console.log(humanScore);
    } else if (humanChoice === "rock") {
      console.log("Rock beats scissors you win");
      humanScore++;
      compScore--;
      console.log(humanScore);
    } else if (humanChoice === "scissors") {
      console.log("Both chose scissors it is a Tie");
      humanScore += 0.5;
      compScore += 0.5;
      console.log(humanScore);
    }
  }
}

// Call the functions in the correct order

let round = 5;
function playGame() {
  for (i = 0; i <= round; i++) {
    console.log("five times");
    humanChoiceFunction();
    computerChoice();
    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${compChoice}`);
    playRound();
  }
}
playGame();

console.log(`Final human score: ${humanScore}`);
console.log(`Final computer score: ${compScore}`);
