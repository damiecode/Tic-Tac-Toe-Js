/*jshint esversion: 6 */

const GameBoard = (() => {
  let board = ['X','O','','O','X','','','X',''];
  return { board };
})();

const PlayerFactory = (name, symbol) => {
  return { name, symbol };
};

const Game = (() => {
  let player1 = PlayerFactory('', 'X');
  let player2 = PlayerFactory('', 'O');
  let currentPlayer = player1;

  const winCombinations = (arr) => {
    let result = false;
    [0, 3, 6].forEach(i => {
      if(arr[i] === arr[i+1] && arr[i] === arr[i + 2] && arr[i] !== '') {
        result = true;
      }
    });

    [0, 1, 2].forEach(i => {
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
    let button = event.target;
    let index = button.getAttribute('data-cell');
    if (GameBoard.board[index] === '') {
      GameBoard.board[index] = currentPlayer.symbol;
      if (currentPlayer === player1) {
        currentPlayer = player2;
      } else {
        currentPlayer = player1;
      }
      DisplayController.renderBoard();
    }
  };
  const createPlayers = (event) => {
    let player1Name = document.getElementById('player1_name').value;
    let player2Name = document.getElementById('player2_name').value;

    player1.name = player1Name;
    player2.name = player2Name;
    const form = document.getElementById('players_form');
    form.reset();
    form.style.display = "none";
    DisplayController.renderPlayers();
  };

  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => cell.addEventListener('click', play));

  const newPlayerbtn = document.querySelector('.addPlayers');
  newPlayerbtn.addEventListener('click', createPlayers);

  return { winCombinations, player1, player2 };
})();

const DisplayController = (() => {
  const renderBoard = () => {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      let index = cell.getAttribute('data-cell');
      cell.innerHTML = GameBoard.board[index];
    });
  };

  const renderPlayers = () =>{
    let divPlayers = document.querySelector('.players');
    divPlayers.innerHTML = `
    <p>Player 'X': ${Game.player1.name}</p>
    <p>Player 'O': ${Game.player2.name}</p>
    `;
  };

  window.addEventListener('load', renderBoard);
  return { renderBoard, renderPlayers };
})();
