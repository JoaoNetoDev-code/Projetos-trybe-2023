/*
  Dada uma matriz de inteiros, onde todos os elementos, exceto um, ocorrem duas vezes, encontre o elemento único.

Exemplo

O elemento único é.

Descrição da função

Complete a função LoneInteger no editor abaixo.

aloneinteger tem os seguintes parâmetros:

int a[n] : uma matriz de inteiros
Devoluções

int: o elemento que ocorre apenas uma vez
Formato de entrada

A primeira linha contém um único número inteiro,, o número de inteiros na matriz.
A segunda linha contéminteiros separados por espaço que descrevem os valores em.

Restrições

É garantido queé um número ímpar e que existe um elemento único.
, onde.
*/

'use strict';

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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}
