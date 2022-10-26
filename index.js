const cells = document.querySelectorAll('.cell');
const restart = document.querySelector('button');

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

for(let i=0; i<cells.length; i++) {
    cells[i].addEventListener('click', () => {
        cells[i].innerHTML = 'X';
        player1.push(i);
        checkWinner();
    });
}

/* find() => per ogni elemento in winCombinations trova il primo elemento che soddisfa una certa condizione */
/* filter() => per ogni elemento in item prende gli elementi che soddisfano una certa condizione */
function checkWinner() {
    winCombinations.find((item) => {
        if(item.filter((i) => player1.includes(i)).length === 3) {
            alert('Player1 Vince!');
            return item;
        }
        return;
    });
}

restart.addEventListener('click', () => {
    for(let i=0; i<cells.length; i++) {
        cells[i].innerHTML = '';
    }
    player1.length = 0;
});