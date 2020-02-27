import GameBoard from './gameboard';
// eslint-disable-next-line import/no-cycle
import Game from './play';

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

export default DisplayController;