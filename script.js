console.log("Hello world");


function getComputerChoice() {
    const compChoice = Math.random()
    console.log(compChoice)

    if (compChoice < 0.3) {
        console.log("rock")
        return "Rock"
    } else if(compChoice > 0.3 && compChoice <=0.6){
        console.log("paper")
        return "Paper"
    }else{
        console.log("scissors")
        return "Scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("What is your choice?")
    console.log(humanChoice);
    return humanChoice;
    //console.log(prompt("What is your choice?"))
}


getComputerChoice();
getHumanChoice()