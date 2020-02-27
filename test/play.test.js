import Game from '../src/js/play';
import PlayerFactory from '../src/js/playerFactory';
import GameBoard from '../src/js/gameboard';

const player1 = PlayerFactory('Damie', 'X', 0);
const currentPlayer = player1;

test('should check if current player is Player1', () => {
  expect(currentPlayer.name).toBe('Damie');
});

test('should check for a winner', () => {
  GameBoard.board = ['X', '', 'O', 'X', '', 'O', 'X', '', ''];
  expect(Game.winCombinations(GameBoard.board)).toBe(true);
});

test('should check for a winner', () => {
  GameBoard.board = ['X', 'X', 'X', 'O', '', 'O', 'X', '', 'O'];
  expect(Game.winCombinations(GameBoard.board)).toBe(true);
});

test('should check for a winner', () => {
  GameBoard.board = ['X', '', 'X', 'O', 'X', 'O', 'X', '', 'O'];
  expect(Game.winCombinations(GameBoard.board)).toBe(true);
});

test('should check for a winner', () => {
  GameBoard.board = ['X', 'X', 'O', 'X', 'X', 'O', 'O', '', 'O'];
  expect(Game.winCombinations(GameBoard.board)).toBe(true);
});

test('should check if it is a draw', () => {
  GameBoard.board = ['O', 'X', 'O', 'O', 'X', 'O', 'X', 'O', 'X'];
  expect(Game.winCombinations(GameBoard.board)).toBe(false);
});
