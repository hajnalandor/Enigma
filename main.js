const rotorsetup = require('./rotorssetup');
const todaysetup = require('./todaysetup');
const rotor = require('./rotor');
const reflector = require('./reflector');
const plugboard = require('./plugboard');
const inputszoveg = require('./inputszoveg');
const maibeallitas = require('./maibeallitas');

let INPUT = inputszoveg.inputszoveg();
console.log(INPUT);
let eredmeny = [];
let n;
let changedrotor1 = rotorsetup.rotor1permutation;
let changedrotor2 = rotorsetup.rotor2permutation;
let changedrotor3 = rotorsetup.rotor3permutation;
let x = todaysetup.todaysetup();
changedrotor1 = maibeallitas.mai(x[0], changedrotor1);
changedrotor2 = maibeallitas.mai(x[1], changedrotor2);
changedrotor3 = maibeallitas.mai(x[2], changedrotor3);

let rotorlength = rotorsetup.rotor1permutation;
for (let i = 0; i < INPUT.length; i++) {
  n = INPUT[i];
  n = plugboard.change(n, rotorsetup.plugboardpermutation);
  n = rotor.rotor1(n, changedrotor1);
  n = rotor.rotor1(n, changedrotor2);
  n = rotor.rotor1(n, changedrotor3);
  n = reflector.change(n, rotorsetup.reflectorpermutation);
  n = rotor.rotor1inv(n, changedrotor3);
  n = rotor.rotor1inv(n, changedrotor2);
  n = rotor.rotor1inv(n, changedrotor1);
  n = plugboard.change(n, rotorsetup.plugboardpermutation);
  changedrotor1 = rotor.rotor1Forward(changedrotor1);
  if (i !== 0 && i % rotorlength === 0) {
    changedrotor2 = rotor.rotor1Forward(changedrotor2);
  }
  if (i !== 0 && i % rotorlength * rotorlength === 0) {
    changedrotor3 = rotor.rotor1Forward(changedrotor3);
  }
  eredmeny.push(n);
}
console.log(eredmeny);
