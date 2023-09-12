/*
Dado um tempo em formato AM/PM de -horas, convertido para o horário militar (24 horas).

Observação: - 12h00 em um relógio de 12 horas é 00h00 em um relógio de 24 horas.
- 12h00 em um relógio de 12 horas é 12h00 em um relógio de 24 horas.

Exemplo


Retornar '12:01:00'.


Retorne '00:01:00'.

Descrição da função

Preencha a função timeConversion no editor abaixo. Deve retornar uma nova string representando a hora de entrada no formato de 24 horas.

timeConversion tem os seguintes parâmetros:

string s : um tempo em formato de hora
Devoluções

string : o tempo em formato de hora
Formato de entrada

Uma única cordaque representa um momento em formato de relógio de hora (ou seja:ou).

Restrições

Todos os tempos de entrada são válidos
Exemplo de entrada

19:05:45
Saída de amostra

19:05:45
*/

'use strict';

const { time } = require('console');
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  s.split('');
  let hors = parseInt(s[0] + s[1]);
  console.log(hors);
  let min = s[3] + s[4];
  let secund = s[6] + s[7];
  let amOrPm = s[8] + s[9]

  if (hors >= 12 && amOrPm === 'AM') {
    hors = hors - 12;
  } else if (hors < 12 && amOrPm === 'PM') {
    hors = hors + 12
  }
  
  if (hors < 10) {
    return (`0${hors}:${min}:${secund}`)
  } else {
    return (`${hors}:${min}:${secund}`)
  }
}

console.log(timeConversion('04:59:59AM'));
console.log(timeConversion('12:40:55PM'));

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
