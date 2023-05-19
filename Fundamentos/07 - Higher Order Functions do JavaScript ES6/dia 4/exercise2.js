// escreva sum abaixo
const sum = (...numbers) => {
    const  numeros = numbers
    const soma = numeros.reduce((acc, curr) => acc + curr)
 return soma;
};

console.log(sum(10,10,10,10,1010,10,10,10));