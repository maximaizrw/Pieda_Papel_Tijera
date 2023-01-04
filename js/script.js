var playerScore = 0;
var computerScore = 0;

function getComputerChoice() {
    let choices = ["piedra", "papel", "tijera"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "Empate";
    } else if (playerSelection === "piedra") {
        if (computerSelection === "tijera") {
            playerScore++;
            return "Ganaste! piedra rompe tijera.";
        } else {
            computerScore++;
            return "Perdiste. papel envuelve piedra.";
        }
    } else if (playerSelection === "papel") {
        if (computerSelection === "piedra") {
            playerScore++;
            return "Ganaste! papel envuelve piedra.";
        } else {
            computerScore++;
            return "Perdiste. tijera corta papel.";
        }
    } else if (playerSelection === "tijera") {
        if (computerSelection === "papel") {
            playerScore++;
            return "Ganaste! tijera corta papel.";
        } else {
            computerScore++;
            return "Perdiste. Piedra rompe tijera.";
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Ingrese piedra, papel o tijera");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Puntuación: Jugador ${playerScore} - Computadora ${computerScore}`);
    }
    if (playerScore === computerScore) {
        console.log("La partida termino en empate!")
    } else if (playerScore > computerScore) {
        console.log("Ganaste la partida!")
    } else{
        console.log("Perdiste la partida!")
    }
}




game();