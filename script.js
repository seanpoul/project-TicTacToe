let clickCounter = 0;
let clickedCell;
let boardState = ["", "", "", "", "", "", "", "", "",];
let makeTBody;
let playerInfo = document.getElementById('insertGameboardHere');
const markerOne = "X";
const markerTwo = "O";
let currentPlayerOne = "Player One";
let currentPlayerTwo = "Player Two";
let gameOver = true;
const getTable = document.createElement('TABLE');

function makeGameboard() {
    playerInfo.append(getTable);
    makeTBody = getTable.createTBody();
    const makeRow = makeTBody.insertRow();

    for (i = 0; i < 9; i++) {
        makeRow.insertCell(i)
    }
};

makeGameboard()

makeTBody.addEventListener('click', (clickedCell) => {
    if (gameOver === false) {
        clickCounter++
        if (clickCounter === 0 || clickCounter % 2) {
            if (clickedCell.target.textContent === markerTwo || clickedCell.target.textContent === markerOne) {
                clickCounter--
                return
            }
            else if (typeof clickedCell.target.textContent !== 'undefined') {
                clickedCell.target.textContent = markerOne;
            }
        }
        else {
            if (clickedCell.target.textContent === markerTwo || clickedCell.target.textContent === markerOne) {
                clickCounter--
                return
            }
            else if (typeof clickedCell.target.textContent !== 'undefined') {
                clickedCell.target.textContent = markerTwo;
            }
        }
        checkWinner(clickedCell)
    }
});


function announceWinner(gameWinner) {
    let winnerName = document.getElementById('winnerDisplay');

    if (gameWinner == currentPlayerOne) {
        winnerName.textContent = `Congratulations ${currentPlayerOne} has won!`;
    }
    else {
        winnerName.textContent = `Congratulations ${currentPlayerTwo} has won!`;
    }
}

function checkWinner(clickedCell) {
    let winConditionsArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    boardState.splice(clickedCell.target.cellIndex, 1, clickedCell.target.textContent);

    for (i = 0; i <= 7; i++) {
        let winCon = winConditionsArray[i];
        let a = boardState[winCon[0]];
        let b = boardState[winCon[1]];
        let c = boardState[winCon[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a == b && b == c) {
            gameOver = true;
            if (a == markerOne) {
                console.log("one")
                announceWinner(currentPlayerOne)
            }
            else if (a == markerTwo) {
                console.log("two")
                announceWinner(currentPlayerTwo)
            }
        }
    }
}

let allButtons = document.querySelectorAll('button')

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let startGame = document.getElementById('startGameBtn');
        let resetGame = document.getElementById('resetGameBtn');
        let oneName = document.getElementById('oneNameBtn');
        let twoName = document.getElementById('twoNameBtn');
        let playerOne = document.getElementById('oneName');
        let playerTwo = document.getElementById('twoName');

        if (e.target == oneName) {
            currentPlayerOne = playerOne.value;
            playerOne.value = ""
        }
        if (e.target == twoName) {
            currentPlayerTwo = playerTwo.value;
            playerTwo.value = ""
        }
        if (e.target == startGame) {
            gameOver = false;
        }
        if (e.target == resetGame) {
            boardState = ["", "", "", "", "", "", "", "", "",];
            gameOver = false;
            for (i = 0; i < 9; i++) {
                getTable.children[0].children[0].children[i].textContent = "";
            }
        }
    })
})