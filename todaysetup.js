const readlineSync = require('readline-sync');
const betuk = require('./abc');
const todaysetup = () => {
  let x = [];
  let igazsag;
  do {
    igazsag = true;
    let mai = [];
    for (let i = 0; i < 3; i++) {
      let a = readlineSync.question(`Adja meg az enigma rotor${i + 1} beallitasat (egy betu):`);
      mai.push(a);
    }
    // Enigma beallitasa a mai napra
    x = [];
    for (let i = 0; i < 3; i++) {
      x[i] = betuk.abc.indexOf(mai[i]);
    }
    for (let i = 0; i < 3; i++) {
      if (x[i] === -1) {
        igazsag = false;
      }
    }
  } while (!igazsag);
  return x;
};
module.exports = {
  todaysetup: todaysetup
};
