
let userScore = document.querySelector(".playerscore");
let computerScore = document.querySelector(".computerscore");
var isplaying = 0;

function togglemusic() {
    let music = document.querySelector(".music");
    
    if (isplaying) {
        music.pause();
        isplaying = 0;
    } else {
        music.play();
        isplaying = 1;
    }
}

function clicked(icon) {

    if (parseInt(userScore.innerHTML) === 5 || parseInt(computerScore.innerHTML) === 5) {
        return;
    }

    let audio = document.querySelector(`.clickaudio`);
    audio.currentTime = 0;
    audio.play();
    let img = document.querySelector("#" + icon);
    img.classList.add(`${icon}IconClicked`);
    img.classList.remove("iconRaised");
    game(icon);
}

let imgs = Array.from(document.querySelectorAll("img"));
imgs.forEach(img => img.addEventListener("transitionend", reverseNow));

function reverseNow(e) {
    if (e.propertyName == "transform") {
        e.target.classList.add("iconRaised");
        e.target.classList.remove("iconClicked");
    }
}

function computerChoiceFunction() {
    let randomChoice = (Math.floor(Math.random() * 2));

    if (randomChoice == 0) {
        return "rock";
    } else if (randomChoice == 1) {
        return "paper";
    } else if (randomChoice == 2) {
        return "scissors";
    } else {
        return "error!";
    }
}

function game(userChoice) {

    let computerChoice = computerChoiceFunction();
    let gamestatus = document.querySelector(".gamestatus");

    if (computerChoice == "error!") {
        console.log("My brother! the computer choice function returned an error!");
        return;
    }

    if (userChoice == computerChoice) {

        gamestatus.innerHTML = "The Computer Input was same as yours.<br><span class='roundtie'>So it's a Tie.</span>";

    } else if (userChoice == "rock" && computerChoice == "paper") {

        gamestatus.innerHTML = "Computer Input -> PAPER.<br><span class='roundlost'>You lost this round.</span>";
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;

    } else if (userChoice == "rock" && computerChoice == "scissors") {

        gamestatus.innerHTML = "Computer Input -> SCISSORS.<br><span class='roundwon'>You won this round!</span>";
        userScore.innerHTML = parseInt(userScore.innerHTML) + 1;

    } else if (userChoice == "paper" && computerChoice == "rock") {

        gamestatus.innerHTML = "Computer Input -> ROCK.<br><span class='roundwon'>You won this round!</span>";
        userScore.innerHTML = parseInt(userScore.innerHTML) + 1;

    } else if (userChoice == "paper" && computerChoice == "scissors") {

        gamestatus.innerHTML = "Computer Input -> SCISSORS.<br><span class='roundlost'>You lost this round.</span>";
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;

    } else if (userChoice == "scissors" && computerChoice == "rock") {

        gamestatus.innerHTML = "Computer Input -> ROCK.<br><span class='roundlost'>You lost this round.</span>";
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;

    } else if (userChoice == "scissors" && computerChoice == "paper") {

        gamestatus.innerHTML = "Computer Input -> PAPER.<br><span class='roundwon'>You won this round!</span>";
        userScore.innerHTML = parseInt(userScore.innerHTML) + 1;

    } else {

        gamestatus.innerHTML = "Hmm, something is wrong...";

    }

    if (userScore.innerHTML == 5) {
        gamestatus.innerHTML = "CONGRATULATIONS!<br>YOU WON THE GAME!<br><span class='gamewonspan'>Hit Restart button (or 'R') to Restart Game.</span>";
        gamestatus.classList.add("gamewon");
    } else if (computerScore.innerHTML == 5) {
        gamestatus.innerHTML = "Sorry, but you lost the Game...<br><span class='gamelostspan'>Hit Restart button (or 'R') to Restart Game.</span>";
        gamestatus.classList.add("gamelost");
    }
}

function restartgame() {
    let gamestatus = document.querySelector(".gamestatus");

    gamestatus.classList.remove("gamelost");
    gamestatus.classList.remove("gamewon");
    gamestatus.innerHTML = "Click Any Icons to Begin!";

    userScore.innerHTML = parseInt(0);
    computerScore.innerHTML = parseInt(0);


}

window.addEventListener("keydown", keypressed);
window.addEventListener("keyup", keyreleased);

function keypressed(e) {
    let restartbutton = document.querySelector(".restartbutton");
    let musicbutton = document.querySelector(".musictoggler");

    if (e.keyCode == 82) {
        restartgame();
        restartbutton.classList.add("restartbuttononr");
        
    } else if (e.keyCode == 77) {
        togglemusic();
        musicbutton.classList.add("musictoggleronm");
    }
}

function keyreleased(e) {
    let restartbutton = document.querySelector(".restartbutton");
    let musicbutton = document.querySelector(".musictoggler");
    let keysinfo = document.querySelector(".keysinfo");

    if (e.keyCode == 82) {
        restartbutton.classList.remove("restartbuttononr");
        keysinfo.classList.add("hidekeysinfo");
    } else if (e.keyCode == 77) {
        musicbutton.classList.remove("musictoggleronm");
        keysinfo.classList.add("hidekeysinfo");
    }
    
}