// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'

// const hydrateBase = (string) => {
//     if (string === '1 cerveja') { return '1 copo de água' };
//     if (string === '1 cerveja, 2 shots e 1 catuaba') { return '4 copos de água'};
//     if (string === '2 caipirinhas') { return '2 copos de água'};
//     if (string === '1 cachaça, 5 cervejas e 1 copo de vinho') { return '7 copos de água'}
//     if (string === '2 shots de tequila, 2 cervejas e 1 corote') { return '5 copos de água'}
//     if (string === '1 copo de catuaba, 1 cervejas e 1 copo de vinho') { return '3 copos de água'}
//     if (string === '4 caipirinhas e 2 cervejas') { return '6 copos de água'}
// }; //// jeito facil porem demorado...

const findNumber = (array) => {
    const numbers =[];
    const stringLetter = array.split('');

    stringLetter.forEach(letter => {
        const inteiros = parseInt(letter);
        if (inteiros > 0 || inteiros < 9) {
        let number  = inteiros;
        numbers.push(number)
        }
    });
    return numbers;
}

console.log(findNumber('1 cerveja, 2 shots e 1 catuaba'))

const sumNumber = (array) => {
    let sum = 0;
    array.forEach((numero) => {
        sum += numero;
    })
    return sum;
};
    const hydrate = (string) => {
    const aguaAbeber = sumNumber(findNumber(string));
    
    if (aguaAbeber === 1 ) {return `${aguaAbeber} copo de água`}

    const result = `${aguaAbeber} copos de água`
        return result;
    }
    console.log(hydrate('4 caipirinhas e 2 cervejas'))
module.exports = hydrate;