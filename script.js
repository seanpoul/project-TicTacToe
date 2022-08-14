const getTable = document.createElement('TABLE');
let clickCounter = 0;
let clickedCell;
let winConditionsArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    (function makeGameboard() {
        document.body.append(getTable);
        const makeTBody = getTable.createTBody();
        const makeRow = makeTBody.insertRow();

        for (i = 0; i < 9; i++) {
            makeRow.insertCell(i)
        }
    })();

getTable.addEventListener('click', (clickedCell) => {
    clickCounter++
    // console.log(clickedCell.target.cellIndex)
    // console.log(clickCounter)
    if (clickCounter = 0 || clickCounter % 2) {
        clickedCell.target.textContent = "X"
    }
    else {
        clickedCell.target.textContent = "O"
    }

    return clickedCell
})


function checkWinner(choiceOne, choiceTwo, choiceThree) {
    // plus or minus 3 from cell index. check textcontent for matches

    console.log(clickedCell)

}