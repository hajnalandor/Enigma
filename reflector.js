const change = (char, reflector) => {
  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 2; j++) {
      if (reflector[i][j] === char && j === 0) {
        return reflector[i][1];
      } else if (reflector[i][j] === char && j === 1) {
        return reflector[i][0];
      }
    }
  }
};

module.exports = {
  change: change
};
