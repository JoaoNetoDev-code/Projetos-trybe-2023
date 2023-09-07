// Parte II – Desafio técnico
// Agora, você verá algumas especificações de algoritmos para desenvolver. 
// É fundamental que você utilize o que estudou de let, const, arrow functions, template literals e ternary operator.

// 1 – Crie uma função que ligue e desligue o motor de um carro

let ligarCar = true
let statusCar;

// function ligaMotor(ligarCar) {
//     if (ligarCar === true) {
//     statusCar = 'seu carro esta ligado';
//     } else {
//         statusCar ='carro desligado';
//     }console.log(statusCar)
// }
    

    const ligaMotor = ligarCar => ligarCar === true ? 'Seu Carro Esta Ligado!' : 'Carro Desligado!';
        
    console.log(ligaMotor(false))


//// 2 – Crie uma função que calcule a área de um círculo.
// A área de um círculo é pi vezes o raio elevado ao quadrado (A = π r²). 
// Aprenda a usar esta fórmula para calcular a área de um círculo, quando souber a medida do diâmetro.




// function calcularAreaDoCirculo (raio) {
//     const pi = 3.14;
//     Area = pi * (raio ** 2);
//     return `esta é a área do circulo ${Area}`
// }

// console.log(calcularAreaDoCirculo(2))

const calcularAreaDoCirculo = raio => {const pi = 3.14; Area = pi * (raio ** 2); return `A área do circulo é de ${Area}`};

console.log(calcularAreaDoCirculo(10))

// 3 – Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase

const maiorWord = (String) => {
    const wordArray = String.split(' ');
    let maxlength =0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxlength) {
            maxlength = word.length;
            result = word;
        }
    }
    return result;
}

console.log(maiorWord('Antônio foi ao banheiro e não sabemos o que aconteceu'))
