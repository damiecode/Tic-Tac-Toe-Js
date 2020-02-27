import PlayerFactory from '../src/js/playerFactory';

const player1 = PlayerFactory('Damie', 'X', 0);
const player2 = PlayerFactory('Miguel', 'O', 1);

it('checks if player has a name', () => {
  expect(player1.name).toBe('Damie');
  expect(player2.name).toBe('Miguel');
  expect(player1.name === 'Miguel').toEqual(false);
});

it('checks if player has a symbol', () => {
  expect(player1.symbol).toBe('X');
  expect(player2.symbol).toBe('O');
});

it('checks if player has a score', () => {
  expect(player1.score).toBe(0);
  expect(player2.score).toBe(1);
});
