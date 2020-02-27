import DisplayController from './displayController';
import PlayerFactory from './playerFactory';
import GameBoard from './gameboard';

const Game = (() => {
  const player1 = PlayerFactory('', 'X', 0);
  const player2 = PlayerFactory('', 'O', 0);
  const currentPlayer = player1;

  const winCombinations = (arr) => {
    let result = false;
    [0, 3, 6].forEach((i) => {
      if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2] && arr[i] !== '') {
        result = true;
      }
    });

    [0, 1, 2].forEach((i) => {
      if (arr[i] === arr[i + 3] && arr[i] === arr[i + 6] && arr[i] !== '') {
        result = true;
      }
    });

    if (arr[0] === arr[4] && arr[0] === arr[8] && arr[0] !== '') {
      result = true;
    }

    if (arr[2] === arr[4] && arr[2] === arr[6] && arr[2] !== '') {
      result = true;
    }

    return result;
  };
  const play = (event) => {
    const button = event.target;
    const index = button.getAttribute('data-cell');
    if (GameBoard.board[index] === '') {
      GameBoard.board[index] = Game.currentPlayer.symbol;
      const winCheck = winCombinations(GameBoard.board);
      if (winCheck) {
        Game.currentPlayer.score += 1;
        DisplayController.renderGameResult('win');
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => { cell.removeEventListener('click', play); });
      } else if (!GameBoard.board.includes('')) {
        DisplayController.renderGameResult('draw');
      } else {
        Game.currentPlayer = (Game.currentPlayer === player1) ? player2 : player1;
      }
    }

    DisplayController.renderBoard();
    DisplayController.renderPlayers();
  };

  const createPlayers = () => {
    const player1Name = document.getElementById('player1_name').value;
    const player2Name = document.getElementById('player2_name').value;

    player1.name = player1Name;
    player2.name = player2Name;
    const form = document.getElementById('players_form');
    const board = document.getElementById('board');
    form.reset();
    form.style.display = 'none';
    board.style.display = 'block';
    DisplayController.renderPlayers();
  };

  const resetGame = () => {
    const resetgameResult = document.querySelector('.game_result');
    resetgameResult.style.display = 'none';
    GameBoard.board = ['', '', '', '', '', '', '', '', ''];
    DisplayController.renderBoard();
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => { cell.addEventListener('click', play); });
  };

  document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => { cell.addEventListener('click', play); });
});


document.addEventListener('DOMContentLoaded', function () {
  const newPlayerbtn = document.querySelector('.addPlayers');
  newPlayerbtn.addEventListener('click', createPlayers);
});

document.addEventListener('DOMContentLoaded', function () {
  const startGame = document.querySelector('.startGame');
  startGame.addEventListener('click', () => {
    document.getElementById('players_form').style.display = 'block';
    startGame.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const restartGame = document.querySelector('.restartGame');
  restartGame.addEventListener('click', resetGame);
});

  return {
    winCombinations, player1, player2, currentPlayer,
  };
})();

export default Game;
