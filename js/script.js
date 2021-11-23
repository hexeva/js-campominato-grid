// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. 


// UTENTE SCEGLIE DIFFICOLTA'CON IL SELECT E CLICCANDO SUL BOTTONE APPARIRANNO I QUADRATI. IN BASE ALLA DIFFICOLTA' CAMBIA IL NUMERO DI QUADRATI NELLA GRIGLIA (quindi la dimensione dei singoli quadrati)


// AL CLICK SUL SINGOLO QUADRATO ESSO SI COLORERA'


// OGNI QUADRATO AVRà UN NUMERO PROGRESSIVO 

// seleziono il container che dovrò popolare

const gameGrid = document.querySelector('.game-table');
console.log(gameGrid);









// FUNCTIONS

// mi creo la funzione per le varie modalità

// funzione per easy
function easyMode(){
    if(document.getElementById('choose').value == 'easy'){
        for(let i = 1; i <= 100; i++){
            let squareValue = i;
        }
    }
}