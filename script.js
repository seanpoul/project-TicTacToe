const getTable = document.createElement('TABLE');
let clickCounter = 0;

(function makeGameboard() {
    document.body.append(getTable);
    const makeTBody = getTable.createTBody();
    const makeRow = makeTBody.insertRow();

    for (i = 0; i < 9; i++) {
        makeRow.insertCell(i)
    }
})();

getTable.addEventListener('click', (e) => {
    clickCounter++

    console.log(clickCounter)
    if (clickCounter = 0 || clickCounter % 2) {
        e.target.textContent = "X"
    }
    else {
        e.target.textContent = "O"

    }
})