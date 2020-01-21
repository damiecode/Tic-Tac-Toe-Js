/* jshint esversion: 6 */

const GameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];
  return { board };
})();

const PlayerFactory = (name, symbol) => ({ name, symbol });

const Game = (() => {
  const player1 = PlayerFactory('', 'X');
  const player2 = PlayerFactory('', 'O');
  let currentPlayer = player1;

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
        DisplayController.renderGameResult('win');
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => cell.removeEventListener('click', play));
      } else if (!GameBoard.board.includes('')) {
        DisplayController.renderGameResult('draw');
      } else {
        Game.currentPlayer = (Game.currentPlayer === player1) ? player2 : player1;
      }
    }

    DisplayController.renderBoard();
  };

  const createPlayers = (event) => {
    const player1Name = document.getElementById('player1_name').value;
    const player2Name = document.getElementById('player2_name').value;

    player1.name = player1Name;
    player2.name = player2Name;
    const form = document.getElementById('players_form');
    form.reset();
    form.style.display = 'none';
    DisplayController.renderPlayers();
  };

  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => cell.addEventListener('click', play));

  const newPlayerbtn = document.querySelector('.addPlayers');
  newPlayerbtn.addEventListener('click', createPlayers);

  return {
    winCombinations, player1, player2, currentPlayer,
  };
})();

const DisplayController = (() => {
  const renderBoard = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
      const index = cell.getAttribute('data-cell');
      cell.innerHTML = GameBoard.board[index];
    });
  };

  const renderPlayers = () => {
    const divPlayers = document.querySelector('.players');
    divPlayers.innerHTML = `
    <p>Player 'X': ${Game.player1.name}</p>
    <p>Player 'O': ${Game.player2.name}</p>
    `;
  };

  const renderGameResult = (exitCond) => {
    const gameResult = document.querySelector('.game_result');
    if (exitCond==='win') {
      gameResult.innerHTML = `${Game.currentPlayer.name} (${Game.currentPlayer.symbol}) wins the game!`;
    } else if (exitCond === 'draw') {
      gameResult.innerHTML = "It's a Draw!";
    }
  };

  window.addEventListener('load', renderBoard);
  return { renderBoard, renderPlayers, renderGameResult };
})();
