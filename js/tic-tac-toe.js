/* eslint-disable no-use-before-define */
/* eslint-env browser */

const GameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];
  return { board };
})();

const PlayerFactory = (name, symbol, score) => ({ name, symbol, score });

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
        cells.forEach((cell) => cell.removeEventListener('click', play));
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
    cells.forEach((cell) => cell.addEventListener('click', play));
  };

  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => cell.addEventListener('click', play));

  const newPlayerbtn = document.querySelector('.addPlayers');
  newPlayerbtn.addEventListener('click', createPlayers);

  const startGame = document.querySelector('.startGame');
  startGame.addEventListener('click', () => {
    document.getElementById('players_form').style.display = 'block';
    this.style.display = 'none';
  });

  const restartGame = document.querySelector('.restartGame');
  restartGame.addEventListener('click', resetGame);

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
    <p>Player 'X': ${Game.player1.name} ${Game.player1.score} </p>
    <p>Player 'O': ${Game.player2.name} ${Game.player2.score}</p>
    `;
  };

  const renderGameResult = (exitCond) => {
    const gameResult = document.querySelector('.game_result');
    if (exitCond === 'win') {
      gameResult.innerHTML = `${Game.currentPlayer.name} (${Game.currentPlayer.symbol}) wins the game!`;
    } else if (exitCond === 'draw') {
      gameResult.innerHTML = "It's a Draw!";
    }
    gameResult.style.display = 'block';
  };

  window.addEventListener('load', renderBoard);
  return { renderBoard, renderPlayers, renderGameResult };
})();
