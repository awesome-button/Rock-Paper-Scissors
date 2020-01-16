let buttons = document.getElementsByClassName("button");
let playerInput = "";
let computerInput = "";
let a = document.getElementById("playerScore");
let b = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;

const computerSelection = () => {
    const options = ["rock", "paper", "scissors"];
    let randomValue = options[Math.floor(Math.random() * options.length)];
    return randomValue;
}

const playRound = () => {
    computerInput = computerSelection();
    
        if (playerInput === computerInput) return draw();
        
        if (playerInput === "rock") {
            (computerInput === "paper") ? lost() : won();
        }

        if (playerInput === "paper") {
            (computerInput === "scissors") ? lost() : won();
        }

        if (playerInput === "scissors") {
            (computerInput === "rock") ? lost() : won();
        }

}

const lost = () => {
    alert(`You lost, ${computerInput} beats ${playerInput}`);
    computerScore++;
}

const won = () => {
    alert(`You won, ${playerInput} beats ${computerInput}`);
    playerScore++;
}

const draw = () => {
    alert(`It's a draw`);
    computerScore++;
    playerScore++;
}

const gameOver = () => {
    return playerScore >= 5 || computerScore >= 5;
}

const game = () => {
    
    for (let button of buttons) {
        button.addEventListener('click', () => {
            playerInput = button.textContent;
            playRound();
            a.textContent = playerScore;
            b.textContent = computerScore;
            console.log(computerScore, playerScore);
            if (gameOver()) {
                alert(`Game over`);
                playerScore = 0;
                computerScore = 0;
                return;
            };
        });
    
    }

}

game();