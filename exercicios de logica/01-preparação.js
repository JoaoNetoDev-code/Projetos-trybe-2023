/*
Dado um array de inteiros, calcule as proporções de seus elementos que são positivos, negativos e zero. Imprima o valor decimal de cada fração em uma nova linha com casas após o decimal.

Nota: Este desafio apresenta problemas de precisão. Os casos de teste são dimensionados para seis casas decimais, embora respostas com erro absoluto de até sejam aceitáveis.

Exemplo

Existem elementos, dois positivos, dois negativos e um zero. Suas proporções são e. Os resultados são impressos como:

0,400000
0,400000
0,200000
Descrição da função

Complete a função plusMinus no editor abaixo.

plusMinus possui os seguintes parâmetros:

int arr[n]: uma matriz de inteiros
Imprimir
Imprima as proporções de valores positivos, negativos e zero na matriz. Cada valor deve ser impresso em uma linha separada com dígitos após o decimal. A função não deve retornar um valor.

Formato de entrada

A primeira linha contém um número inteiro, , o tamanho da matriz.
A segunda linha contém números inteiros separados por espaços que descrevem.

Restrições



Formato de saída

Imprima as seguintes linhas, cada uma com decimais:

proporção de valores positivos
proporção de valores negativos
proporção de zeros
Exemplo de entrada

Função STDIN
----- --------
6 arr[] tamanho n = 6
-4 3 -9 0 4 1 arr = [-4, 3, -9, 0, 4, 1]
Saída de amostra

0,500000
0,333333
0,166667
Explicação

Existem números positivos, números negativos e zero na matriz.
As proporções de ocorrência são positivas: , negativas: e zeros: .
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
* Complete the 'plusMinus' function below.
*
* The function accepts INTEGER_ARRAY arr as parameter.
*/
const array = [-1, -2, 0, 1, 2]

function plusMinus(arr) {
  let positvos = 0;
  let negativos = 0;
  let neltros = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === 0) {
      neltros += 1
    } else if (arr[index] > 0) {
      positvos += 1
    } else if (arr[index] < 0) {
      negativos += 1
    }

  }
  const maior0 = (positvos / arr.length).toFixed(5)
  const menor0 = (negativos / arr.length).toFixed(5)
  const igual0 = (neltros / arr.length).toFixed(5)
  console.log(maior0)
  console.log(menor0)
  console.log(igual0)
}
plusMinus(array)

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
