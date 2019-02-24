let rotor = require('./rotor');
const mai = (ertek, changedrotor1) => {
  for (let i = 0; i < ertek; i++) {
    changedrotor1 = rotor.rotor1Forward(changedrotor1);
  }
  return changedrotor1;
};
module.exports = {
  mai: mai
};
