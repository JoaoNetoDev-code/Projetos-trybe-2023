//exercicio 2 - pagina 41 do livro de logica de programa e algoritmos com javascript de Edécio Iepsen

// elaborar um programa que leia o valor de um jantar. calcule e informe o valor da taxa de garçom (10%) e o valor total a ser pago.
// EXEMPLO:
// valor do jantar: R$80,00
// taxa do garçom: 8,00
// total a pagar: 88,00

function subTotal(valor, taxa) {
  const taxaDoGarçom = (taxa / 100) * valor;
  const subTotal = valor + taxaDoGarçom;
  return `
  Valor do jantar: R$${valor},00
  Taxa do garçom: R$${taxaDoGarçom},00
  Total a pagar: R$${subTotal},00`
}

console.log(subTotal(80, 10))