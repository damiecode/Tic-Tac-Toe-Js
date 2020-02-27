const GameBoard = require('../src/js/gameboard');

test('should display board', () => {
    GameBoard.board = ['', '', '', 'X', '', '', '', '', ''];
    expect(GameBoard.board).toContain('X');
});

test('should display board', () => {
    GameBoard.board = ['', '', '', 'O', '', '', '', '', ''];
    expect(GameBoard.board).toContain('O');
});
