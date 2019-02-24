const betuk = require('./abc');
const readlineSync = require('readline-sync');
const inputszoveg = () => {
  let a;
  let igazsag;
  do {
    igazsag = true;
    let x = [];
    a = readlineSync.question(`Adja meg kodolni kivant szoveget ([a-z] kisbetuk) :`);
    for (let i = 0; i < a.length; i++) {
      x[i] = betuk.abc.indexOf(a[i]);
    }
    for (let i = 0; i < x.length; i++) {
      if (x[i] === -1) {
        igazsag = false;
      }
    }
  }
  while (!igazsag);
  return a;
};
module.exports = {
  inputszoveg: inputszoveg
};
