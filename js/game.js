const score = {
    player: 0,
    computer: 0
};

const game = {
    choices: {
        piedra: {
            beats: 'tijera'
        },
        papel: {
            beats: 'piedra'
        },
        tijera: {
            beats: 'papel'
        }
    }
}

const buttons = document.querySelectorAll('button');
document.getElementById('restart').addEventListener('click', function () {
    score.player = 0;
    score.computer = 0;
    document.getElementById('playerScore').innerHTML = score.player;
    document.getElementById('computerScore').innerHTML = score.computer;
});

function getComputerChoice() {
    let choices = ["piedra", "papel", "tijera"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (game.choices[playerSelection].beats === computerSelection) {
        console.log(playerSelection);
        score.player++;
        document.getElementById('playerScore').textContent = score.player;
        document.getElementById('computerScore').textContent = score.computer;
        document.getElementById('status').textContent = "GANASTE";
        document.getElementById('winner').textContent = `${playerSelection} gana a ${computerSelection}`;
        return;
    } else if (game.choices[computerSelection].beats === playerSelection) {
        score.computer++;
        document.getElementById('playerScore').textContent = score.player;
        document.getElementById('computerScore').textContent = score.computer;
        document.getElementById('status').textContent = "PERDISTE";
        document.getElementById('winner').textContent = `${computerSelection} gana a ${playerSelection}`;
        return;
    } else {
        document.getElementById('winner').textContent = `Ambos eligieron ${playerSelection}`;
        document.getElementById('status').textContent = "EMPATE";
        return;
    }
}


buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value)
    })
})