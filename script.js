console.log("Hello world");
let humanScore = 0;
let computerScore = 0;
//let humanChoice = "";
//let compChoice = "";

function getComputerChoice() {
  const compChoice2 = Math.random();
  let compChoice;

  if (compChoice2 < 0.3) {
    compChoice = "Rock";
  } else if (compChoice2 <= 0.6) {
    compChoice = "Paper";
  } else {
    compChoice = "Scissors";
  }

  console.log(compChoice2); // This is optional, for debugging purposes
  console.log(compChoice); // This is optional, for debugging purposes
  return compChoice;
}

//console.log(getComputerChoice());

const compChoice3 = getComputerChoice();

function getHumanChoice() {
  let humanChoice2 = prompt("What is your choice?")
  //const humanChoice2 = "Rock";
  console.log(humanChoice2);
  console.log(compChoice3);
  return humanChoice2;
  //console.log(prompt("What is your choice?"))
}
const humanChoice3 = getHumanChoice();
console.log(humanChoice3);

function playRound() {
  console.log(humanChoice3);
  console.log(compChoice3);
  let humanChoice2 = humanChoice3.toLowerCase();
  console.log(humanChoice2);
  if (compChoice3 === "Rock") {
    if (humanChoice3 === "paper") {
      console.log("Paper beats Rock you win");
    } else if (humanChoice3 === "rock") {
      console.log("Both chose rock it is a Tie");
    } else if (humanChoice3 === "scissors") {
      console.log("Rock beats scissors you lose");
    }
  } else if (compChoice3 === "Paper") {
    if (humanChoice3 === "paper") {
      console.log("Both chose paper it is a Tie");
    } else if (humanChoice3 === "Rock") {
      console.log("Paper beats rock you lose");
    } else if (humanChoice3 === "scissors") {
      console.log("Scissors beats rock you lose");
    }
  } else if (compChoice3 === "Scissors") {
    if (humanChoice3 === "paper") {
      console.log("Scissors beats paper");
    } else if (humanChoice3 === "Rock") {
      console.log("Rock beats scissors you lose");
    } else if (humanChoice3 === "scissors") {
      console.log("Both chose scissors it is a Tie");
    }
  }
}

//getComputerChoice();
//getHumanChoice();
playRound();
