const getTable = document.createElement('TABLE');
let clickCounter = 0;
let clickedCell;
let winConditionsArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

(function makeGameboard() {
    document.body.append(getTable);
    const makeTBody = getTable.createTBody();
    const makeRow = makeTBody.insertRow();

    for (i = 0; i < 9; i++) {
        makeRow.insertCell(i)
    }
})();

console.log(clickedCell)

getTable.addEventListener('click', (clickedCell) => {
    clickCounter++
    if (clickCounter === 0 || clickCounter % 2) {
        if (clickedCell.target.textContent === "O" || clickedCell.target.textContent === "X") {
            clickCounter--
            return
        }
        else if (typeof clickedCell.target.textContent !== 'undefined') {
            clickedCell.target.textContent = "X";
        }
    }
    else {
        if (clickedCell.target.textContent === "O" || clickedCell.target.textContent === "X") {
            clickCounter--
            return
        }
        else if (typeof clickedCell.target.textContent !== 'undefined') {
            clickedCell.target.textContent = "O";
        }

    }
    return clickedCell
})


function checkWinner(choiceOne, choiceTwo, choiceThree) {



    console.log(clickedCell)

}