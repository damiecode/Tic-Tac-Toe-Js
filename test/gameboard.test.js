const GameBoard = require('../src/js/gameboard');
GameBoard.board = ['', '', '', 'X', '', '', '', '', ''];
test('should display board', () => {
    expect(GameBoard.board).toContain('X');
});

