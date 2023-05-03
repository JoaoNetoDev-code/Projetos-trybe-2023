const encode = require('./encodeDecode');
const decode = require('./encodeDecode');

describe('Test for encode;', () => {

    it('encode é uma function?', () => {
        expect(typeof encode).toBe('function');
    });
    
    // por que quando exporto as funções no mesmo  modulo o resultado dos tests se inverte?/
it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('1','2','3','4','5')).toBe('a','e','i','o','u');
});// duvida aqui!!!! 


it('Teste se as demais letras/números não são convertidos para cada caso;', () => {
    expect(encode('6')).toBe('6')
});

it('Teste se a string que é retornada pela função encode tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('a')).toHaveLength(1)
});
});

describe('tes for decode', () => {

    it('decode is this function?', () => {
        expect(typeof decode).toBe('function');
    });
      // por que quando exporto as funções no mesmo  modulo o resultado dos tests se inverte?/
    it('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;', () => {
        expect(decode('1','2','3','4','5')).toBe('a','e','i','o','u');
    });// duvida aqui!!!! 
    
    it('Teste se as demais letras/números não são convertidos para cada caso;', () => {
        expect(decode('6')).toBe('6')
    });
    
    it('Teste se a string que é retornada pela função decode tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
        expect(decode('1')).toHaveLength(1)
    });
});
