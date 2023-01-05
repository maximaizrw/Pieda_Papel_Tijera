// Declara un objeto llamado 'score' con dos propiedades: 'player' y 'computer'
// que ambas tienen un valor inicial de 0
const score = {
    player: 0,
    computer: 0
};

// Declara un objeto llamado 'game' con una propiedad llamada 'choices'
// que es un objeto con tres propiedades: 'piedra', 'papel' y 'tijera'
// Cada una de estas tres propiedades es a su vez un objeto con una única propiedad llamada 'beats'
// que especifica a qué opción gana la opción actual
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

// Selecciona todos los elementos 'button' en la página y guarda el resultado en una variable llamada 'buttons'
const buttons = document.querySelectorAll('button');

// Agrega un manejador de eventos al botón con el id 'restart'
// Cuando se haga clic en el botón, se resetearán los puntajes de 'player' y 'computer' a 0
// y se actualizarán los elementos con los ids 'playerScore' y 'computerScore' para reflejar esto
document.getElementById('restart').addEventListener('click', function () {
    score.player = 0;
    score.computer = 0;
    document.getElementById('playerScore').innerHTML = score.player;
    document.getElementById('computerScore').innerHTML = score.computer;
});

// Declara una función llamada 'getComputerChoice' que retorna una opción aleatoria para la computadora
// La función crea una lista con las tres opciones posibles y luego selecciona una opción al azar
// para retornar
function getComputerChoice() {
    let choices = ["piedra", "papel", "tijera"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Declara una función llamada 'playRound' que toma una opción de jugador como argumento
// La función obtiene la opción de la computadora llamando a 'getComputerChoice'
// Luego compara las opciones de ambos jugadores y actualiza el puntaje y el mensaje de estado en consecuencia
// Si el jugador gana, se aumenta su puntaje en 1 y se muestra un mensaje indicando que ganó
// Si la computadora gana, se aumenta su puntaje en 1 y se muestra un mensaje indicando que perdió
// Si ambos eligen el mismo, se muestra un mensaje indicando que el resultado es un empate
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

// Itera a través de cada botón en la lista 'buttons'
// Agrega un manejador de eventos al botón que ejecuta la función 'playRound' y le pasa el valor del botón como argumento
// cuando se hace clic en el botón
buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value)
    })
})