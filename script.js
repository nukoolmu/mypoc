const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWin = () => {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === currentPlayer;
        });
    });
};

const checkDraw = () => {
    return [...cells].every(cell => {
        return cell.textContent !== '';
    });
};

const handleClick = (event) => {
    const cell = event.target;
    if (cell.textContent !== '') return;

    cell.textContent = currentPlayer;
    cell.style.backgroundColor = currentPlayer === 'X' ? 'red' : 'green';

    if (checkWin()) {
        setTimeout(() => {
            alert(`${currentPlayer} wins!`);
            resetBoard();
        }, 100);
    } else if (checkDraw()) {
        setTimeout(() => {
            alert('Draw!');
            resetBoard();
        }, 100);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
};

const resetBoard = () => {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.backgroundColor = ''; // Reset background color
    });
    currentPlayer = 'X';
};

cells.forEach(cell => cell.addEventListener('click', handleClick));

