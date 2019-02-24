const code1 = (char, permutation) => {
  let result = '';
  for (let i = 0; i < 26; i++) {
    if (char === permutation[i][0]) {
      result = permutation[i][1];
    }
  }
  return result;
};

const code1inv = (char, permutation) => {
  let result = '';
  for (let i = 0; i < 26; i++) {
    if (char === permutation[i][1]) {
      result = permutation[i][0];
    }
  }
  return result;
};

const shiftforward1 = (permutation) => {
  let n = '';
  for (let i = 0; i < 26; i++) {
    if (i === 0) {
      n = permutation[i][1];
      permutation[i][1] = permutation[i + 1][1];
    } else if (i === 25) {
      permutation[i][1] = n;
    } else {
      permutation[i][1] = permutation[i + 1][1];
    }
  }
  return permutation;
};

module.exports = {
  rotor1: code1,
  rotor1inv: code1inv,
  rotor1Forward: shiftforward1
};
