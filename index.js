const cells = document.querySelectorAll('.cell');
const restart = document.querySelector('button');
const player1Score = document.querySelector('.player1');
const player2Score = document.querySelector('.player2');

const winCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let player1 = [];
let player2 = [];

let score = {
    player1: 0,
    player2: 0
}

let turn = true;

for(let i=0; i<cells.length; i++) {
    cells[i].addEventListener('click', () => {
        if(turn == true) {
            cells[i].innerHTML = 'X';
            player1.push(i);
            turn = false;
        } else {
            cells[i].innerHTML = 'O';
            player2.push(i);
            turn = true;
        }
        checkWinner();
    });
}

/* find() => per ogni elemento in winCombinations trova il primo elemento che soddisfa una certa condizione */
/* filter() => per ogni elemento in item prende gli elementi che soddisfano una certa condizione */
function checkWinner() {
    winCombinations.find((item) => {
        if(item.filter((i) => player1.includes(i)).length === 3) {
            alert('Player1 Vince!');
            score.player1++;
            drewScore();
            cleanField();
            return item;
        } else if(item.filter((i) => player2.includes(i)).length === 3) {
            alert('Player2 Vince!');
            score.player2++;
            drewScore();
            cleanField();
            return item;
        }
        return;
    });
}

function drewScore() {
    player1Score.innerHTML = "Player1: " + score.player1;
    player2Score.innerHTML = "Player2: " + score.player2;
}

drewScore();

function cleanField() {
    for(let i=0; i<cells.length; i++) {
        cells[i].innerHTML = '';
    }
    player1.length = 0;
    player2.length = 0;
    turn = true;
}

restart.addEventListener('click', () => {
    cleanField();
});