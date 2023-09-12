/*
Dados cinco números inteiros positivos, encontre os valores mínimo e máximo que podem ser calculados somando exatamente quatro dos cinco números inteiros. Em seguida, imprima os respectivos valores mínimo e máximo como uma única linha de dois inteiros longos separados por espaço.

Exemplo

A soma mínima ée a soma máxima é. A função imprime

16 24
Descrição da função

Complete a função miniMaxSum no editor abaixo.

miniMaxSum possui os seguintes parâmetros:

arr : uma matriz deinteiros
Imprimir

Imprima dois inteiros separados por espaço em uma linha: a soma mínima e a soma máxima dedeelementos.

Formato de entrada

Uma única linha de cinco inteiros separados por espaço.

Restrições


Formato de saída

Imprima dois inteiros longos separados por espaço, denotando os respectivos valores mínimo e máximo que podem ser calculados somando exatamente quatro dos cinco inteiros. (A saída pode ser maior que um número inteiro de 32 bits.)

Exemplo de entrada

1 2 3 4 5
Saída de amostra

10 14
Explicação

Os números são,,,, e. Calcule as seguintes somas usando quatro dos cinco números inteiros:

Some tudo, exceto, a soma é.
Some tudo, exceto, a soma é.
Some tudo, exceto, a soma é.
Some tudo, exceto, a soma é.
Some tudo, exceto, a soma é.
Dicas: Cuidado com o estouro de números inteiros! Use número inteiro de 64 bits.
*/

'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
 const array = [1,2,3,4,5]

function miniMaxSum(arr) {
  const sortDecrescente = arr.slice().sort((a, b) => b - a)
  const sortCrescente = arr.slice().sort((a, b) => a - b)
  let maxSun = 0;
  let minSun = 0;

  for (let index = 0; index < 4; index += 1) {
      maxSun += sortDecrescente[index];
      minSun += sortCrescente[index];
  };

  console.log(minSun, maxSun)
}
miniMaxSum(array)

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
