

let computerScore = 0;
let userScore = 0;

for (let round = 1; round <= 5; round++) {
    let userChoice = prompt("Enter your choice [Rock/Paper/Scissors]: ")
    userChoice = userChoiceCapitalizer(userChoice);
    switch (userChoice) {
        case 0: console.log("ROCK")
            break;
        case 1: console.log("PAPER")
            break;
        case 2: console.log("SCISSORS")
            break;
        case 3: console.log("WRONG INPUT!")
            break;
    }
    let computerChoice = computerChoiceFunction();

    if (userChoice == computerChoice) {
        console.log("The Computer Input was same as yours, so it's a Tie.\n\n");
        round--;
    } else if (userChoice == 0 && computerChoice == 1) {
        console.log("Computer Input -> PAPER\nYou Lose!\n\n");
        computerScore += 1;
    } else if (userChoice == 0 && computerChoice == 2) {
        console.log("Computer Input -> SCISSORS\nYou Win!\n\n");
        userScore += 1;
    } else if (userChoice == 1 && computerChoice == 0) {
        console.log("Computer Input -> ROCK\nYou win!\n\n");
        userScore += 1;
    } else if (userChoice == 1 && computerChoice == 2) {
        console.log("Computer Input -> SCISSORS\nYou lose!\n\n");
        computerScore += 1;
    } else if (userChoice == 2 && computerChoice == 0) {
        console.log("Computer Input -> ROCK\nYou Lose!\n\n");
        computerScore += 1;
    } else if (userChoice == 2 && computerChoice == 1) {
        console.log("Computer Input -> PAPER\nYou Win!\n\n");
        userScore += 1;
    } else {
        console.log("Hmm, something is wrong...\n\n");
    }
}

if (userScore > computerScore) {
    console.log("YOU WON THE GAME!");
} else if (computerScore > userScore) {
    console.log("YOU LOST THE GAME...");
} else {
    console.log("THE GAME WAS A TIE...");
}



function computerChoiceFunction() {
    return (Math.floor(Math.random() * 2));
}

function userChoiceCapitalizer(userChoice) {
    if (userChoice.toUpperCase() === "ROCK") {
        return 0
    } else if (userChoice.toUpperCase() === "PAPER") {
        return 1
    } else if (userChoice.toUpperCase() === "SCISSORS") {
        return 2
    } else {
        return 3
    }
}