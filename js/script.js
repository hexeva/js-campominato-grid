// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. 

// QUANDO PREMO PLAY:
    //  sparisce l'h2 e appare la griglia
    // verificare cosa ha scelto l'utente
     // appaiono tanti quadrati quanto la scelta di difficoltà dell'utente i quadrati dando classe square e popolare il quadrato con span e numero + dare altezza e larghezza al quadrato a seconda della difficoltà.

// al singolo CLICK della cella aggiungo la classe color 

// AL PLAY:
// seleziono il pulsante e lo salvo in una variabile
const playButton = document.getElementById('play-btn');

// aggiungo evento al pulsante collegato alla funzione creata START_GAME

playButton.addEventListener('click',startGame); 





// FUNZIONI
// funzione di inizio gioco
function startGame(){
    //  sparisce l'h2 dandogli classe hidden appare la griglia togliendo la classe hidden
    // seleziono l'h2
    const gameText = document.getElementById('game-istructions');
    console.log(gameText);
    // aggiungo la classe hidden
    gameText.classList.add('hidden');
    // seleziono la griglia 
    const gameGrid = document.querySelector('.game-table');
    console.log(gameGrid);
    // rimuovo la classe hidden
    gameGrid.classList.remove('hidden');

    
}
// fine funzione