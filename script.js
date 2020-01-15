let buttons = document.getElementsByClassName("button");
let playerInput = "";
let computerInput = "";

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
}

const won = () => {
    alert(`You won, ${playerInput} beats ${computerInput}`);
}

const draw = () => {
    alert(`It's a draw`);
}

for (let button of buttons) {
    button.addEventListener('click', () => {
        playerInput = button.textContent;
        playRound();
});
}