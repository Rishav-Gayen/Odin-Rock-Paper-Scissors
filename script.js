const scoreMessage = document.querySelector(".scoreboard__message");
const scoreInfo = document.querySelector(".scoreboard__info");
const playerSign = document.querySelector("#player-sign");
const computerSign = document.querySelector("#computer-sign");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const buttons = document.querySelectorAll(".buttons__button");
const resetButton = document.querySelector(".reset");

let player = 0;
let computer = 0;

const getComputerChoice = () => {
    const choices = ['✊', '✋', '✌'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

const returnChoice = (computerChoice) => {
    if(computerChoice === "✊") {
        return "rock";
    } else if(computerChoice === "✋") {
        return "paper";
    } else if(computerChoice === "✌") {
        return "scissors";
    }
}

const returnEmoji = (choice) => {
    if(choice === "rock") {
        return "✊";
    } else if(choice === "paper") {
        return "✋";
    } else if(choice === "scissors") {
        return "✌";
    }
}

const resetGame = () => {
    player = 0;
    computer = 0;
    playerSign.textContent = "❔";
    computerSign.textContent = "❔";
    playerScore.textContent = `Player : ${player}`;
    computerScore.textContent = `Computer : ${computer}`;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        computerSign.textContent = computerChoice;
        scoreInfo.textContent = button.id;

        if (button.id === "rock") {
            playerSign.textContent = "✊";
        } else if (button.id === "paper") {
            playerSign.textContent = "✋";
        } else if (button.id === "scissors") {
            playerSign.textContent = "✌";
        }
        else {
            playerSign.textContent = "❔";
        }


        if(button.id === 'rock' && computerChoice === '✊' || button.id === 'paper' && computerChoice === '✋' || button.id === 'scissors' && computerChoice === '✌') {
            scoreMessage.textContent = `${computerChoice} ties with ${computerChoice}`;
        }
        else if(button.id === 'rock' && computerChoice === '✋' || button.id === 'paper' && computerChoice === '✌' || button.id === 'scissors' && computerChoice === '✊') {
            scoreMessage.textContent = `You Lose! ${computerChoice} beats ${returnEmoji(button.id)}`;
            computer++;
            computerScore.textContent = `Computer: ${computer}`;
        }
        else if(button.id === 'rock' && computerChoice === '✌' || button.id === 'paper' && computerChoice === '✊' || button.id === 'scissors' && computerChoice === '✋') {
            scoreMessage.textContent = `You win! ${computerChoice} beats ${returnEmoji(button.id)}`;
            player++;
            playerScore.textContent = `Player: ${player}`;
        }
    })
})

resetButton.addEventListener("click", () => {
    resetGame();
})


