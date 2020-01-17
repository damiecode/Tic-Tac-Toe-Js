const GameBoard = (() => {
  let board = ['','','','','','','','',''];
  return { board };
})();

const PlayerFactory = (name, symbol) => {
  return { name, symbol };
}

const Game = (() => {
  const winCombinations = ((arr) => {
    [0, 3, 6].forEach(i => {
      if(arr[i] === arr[i+1] && arr[i] === arr[i + 2] && arr[i] !== '') {
        return true;
      }
    });

    [0, 1, 2].forEach(i => {
      if (arr[i] === arr[i + 3] && arr[i] === arr[i + 6] && arr[i] !== '') {
        return true;
      }
    });

    if (arr[0] === arr[4] && arr[0] === arr[8] && arr[0] !== '') {
      return true;
    }

    if (arr[2] === arr[4] && arr[2] === arr[6] && arr[2] !== '') {
      return true;
    }

    return false;
  });
  return { winCombinations }
});

