// EXERCICIO 3 - Página 45 do livro logica de programa e algoritmos com javascript de edecio iepsen

// elabore um programa para uma loja, o qual leia o preço de um produto e infrome as opções de pagamento da loja. calcule e informe o valor para o pagamento á vista com 10% de desconto e o valor em 3x.

// EXEMPLO:
// preço: R$60,00
// a vista: R$54,00
// ou 3x de: R$20,00

function payOptions(valor) {
  const desconto = 10 / 100
  const avista = valor - (valor * desconto)
  const parcerlado = valor / 3
  return `
  Preço: R$${valor},00
  à vista: R$${avista},00
  Ou 3x de: R$${parcerlado},00`
}

console.log(payOptions(60))