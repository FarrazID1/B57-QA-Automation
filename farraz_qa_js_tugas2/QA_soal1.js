//Tugas Pekanan 2 - Javascript
//Nama : Farraz Sarmento Salim

const prompt = require('prompt-sync')({ sigint: true });

let x1 = prompt('Enter a number: ');
let squareRoot1 = Math.sqrt(x1);

if (x1 > 0) {
  if (x1 % 2 == 0) {
    console.log('Square root of ' + x1 + ' is == ' + squareRoot1);
  } else {
    console.log('input number must be EVEN (GENAP)');
  }
} else {
  console.log('input number must be POSITIVE');
}
