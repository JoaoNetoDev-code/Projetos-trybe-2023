// exercício 1
// faça as 4 operações basicas com base nos numeros 2 e 4:
// ao final de cada operação imprima na tela no seguinte formato:
// soma: 2 + 4 = x
// subtração: 2 - 4 = x
// divisão: 2 / 4 = x
// multiplicacão: 2 * 4 = x
// -----------------------------------------------

const count = (a, b) => {
 const soma = a + b;
 const subtracao = a - b;
 const divisao = a / b;
 const muiltiplicacao = a * b

 return `
 Soma: ${a} + ${b} = ${soma}
 Subtração: ${a} - ${b} = ${subtracao}
 Divisão: ${a} / ${b} = ${divisao}
 Multiplicação: ${a} * ${b} = ${muiltiplicacao}`
}

console.log(count(2,4))