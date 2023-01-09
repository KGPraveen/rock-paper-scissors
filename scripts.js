

function getComputerChoice() {
    let computerChoice = ["ROCK", "PAPER", "SCISSORS"]
    return (computerChoice[Math.floor(Math.random() * 3)])
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase()

    if (playerSelection == "ROCK" && computerSelection == "ROCK") {
        return ("It's a draw! Two Rocks")
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        return ("You Lose! Paper beats Rock")
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        return ("You Win! Rock beats Scissors")
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        return ("You Win! Paper beats Rock")
    }
    else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
        return ("It's a draw! Two Papers")
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        return ("You Lose! Paper beats Rock")
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        return ("You Lose! Rock beats Scissors")
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        return ("You Win! Scissors beats Paper")
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
        return ("It's a draw! Two Scissors")
    }
    else {
        return ("Invalid Choice! Enter Rock/Paper/Scissors.")
    }

}

function game() {
    var playerScore = 0, computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        let playerChoice = prompt("Enter Rock/Paper/Scissors:")
        let computerChoice = getComputerChoice()
        let result = playRound(playerChoice, computerChoice)
        console.log(result);

        if (result.includes("Win")) {
            playerScore++
        } else if (result.includes("Lose")) {
            computerScore++
        } else if (result.includes("Invalid")) {
            round = round - 1
        } else {
            round = round - 1
        }
    }

    console.log(`Your score: ${playerScore}\nComputer Score: ${computerScore}`);
}


game() //And so it begins!