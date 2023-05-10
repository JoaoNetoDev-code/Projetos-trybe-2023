

// // array.reduce((acumulador, valorAtual, indexAtual, array) => { "código" }, valorInicial);

// array.reduce((acc, curr) => {
// // escopo de execução da função
// }, valorInicial);

// ////exemplo de funcionamento
// const valorItens = [1, 32, 44, 2, 3];

// valorItens.reduce((acc, curr) => {
// console.log(`acumulador - acc:`, acc);
// console.log(`valorAtual - curr:`, curr);
// }, 0);

// // exemplo 2

// valorItens.reduce((acc, curr) => {
// console.log(`acc:`, acc);
// console.log(`curr:`, curr);
// console.log('a soma atual é', acc + curr);

// return acc + curr;
// }, 0);

// // const valorItens = [1, 32, 44, 2, 3];

// // valorItens.reduce((acc, curr) => {
// //   console.log(`valor atual é ${curr}`);
// //   // Antes da primeira iteração o valor de início do `acc` é o valor no index 0 do array, e o valor de início de `curr` é o valor no index 1 do array.
// //   // Iteração 1: valor do acc é 1 e o de curr é 32;
// //   // Após a primeira iteração, o valor de `acc` muda e passa a acumular agora o resultado do retorno da callback (acc + curr).
// //   // Iteração 2: valor do acc é 33 e o de curr é 44;
// //   // Acontece então uma segunda iteração, e `curr` agora assume o valor do index na sequência do array, no caso o valor do segundo index e `acc` segue armazenando os retornos.
// //   // Iteração 3: valor do acc é 77 e o de curr é 2;
// //   // Iteração 4: valor do acc é 79 e o de curr é 3;
// //   // Valor final de `acc` é 82 e `curr` para no 3.

// //   return acc + curr; // Ao fim das iterações podemos ver que o `acc` armazenou o resultado total do retorno da função.
// // });

// /// exemplo sem reduce;
// const numbers = [1, 32, 44, 2, 3];
// let sumNumbers = 30;
// // A variável `sumNumbers` tem um valor inicial de 30 e vai acumulando, a cada iteração do for, o resultado da operação feita em seu escopo!

// for (let index = 0; index < numbers.length; index += 1) {
// sumNumbers += numbers[index];
// }

// console.log(sumNumbers); // 112

// //// exemplo feito com reduce;

// const numbers2 = [1, 32, 44, 2, 3];

// const totalSum = numbers.reduce((acc, curr) => {
// console.log(`valor do acc é ${acc} e o de curr é ${curr}`);
// // Iteração 1: valor do acc é 30 e o de curr é 1
// // Iteração 2:valor do acc é 31 e o de curr é 32
// // Iteração 3: valor do acc é 63 e o de curr é 44
// // Iteração 4: valor do acc é 107 e o de curr é 2
// // Iteração 5: valor do acc é 109 e o de curr é 3
// // Valor final de `acc`é 112 e `curr` para no 3


// return acc + curr;
// }, 30); // O `valorInicial` é 30, ou seja, `acc` antes de executar a primeira iteração já está armazenando esse valor.

// console.log(`valor final do acc é ${totalSum}`);
// // por fim, esse `console.log` imprime o retorno da nossa função, que é o valor final de `acc` após cada uma das 5 iterações, tendo iniciado com valor 30.

// //// resolução simplificada;
// const numbers3 = [1, 32, 44, 2, 3];

// const sumNumbers1 =  (acc, curr) => acc + curr;

// const totalSum3 = numbers.reduce(sumNumbers, 30);

// console.log(totalSum); //112


const numbers4 = [50, 85, -30, 3, 15];
const soma = numbers4.reduce((acumulador, valorAtual) => {
    return acumulador > valorAtual ? acumulador : valorAtual;
});

console.log(soma);