(function generateGameboard() {
    const gameboard = document.querySelectorAll('td');
    const gameboardCells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let gameboardArray = Array.from(gameboard);

    for (i = 0; i < gameboardCells.length; i++) {
        gameboardArray[i].textContent = gameboardCells[i]
    }
})();