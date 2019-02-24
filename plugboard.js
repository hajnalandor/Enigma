const plugboard = (char, letterSwaps) => {
  let result = '';
  for (let i = 0; i < letterSwaps.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (letterSwaps[i][j] === char && j === 0) {
        result = letterSwaps[i][1];
      } else if (letterSwaps[i][j] === char && j === 1) {
        result = letterSwaps[i][0];
      }
    }
  }
  if (result.length > 0) {
    return result;
  } else {
    return char;
  }
};

module.exports = {
  change: plugboard
};
