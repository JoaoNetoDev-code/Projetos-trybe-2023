const myFizzBuzz = require('./myFizzBuzz');

describe('foguete 2', () => {

    it('sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.', () => {
        expect(myFizzBuzz(15)).toBe("fizzbuzz");
    });
    
    it('sendo num um número divisível por 3, e verifique se o retorno é o esperado.', () => {
        expect(myFizzBuzz(3)).toBe('fizz')
    });
    
    it('sendo num um número divisível por 5, e verifique se o retorno é o esperado.', ()=> {
        expect(myFizzBuzz(20)).toBe('buzz');
    });
    
    it('sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.', () => {
        expect(myFizzBuzz(11)).toBe(11);
    });
    
    it('sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado.', () => {
        expect(myFizzBuzz('5')).toBe(false);
    });

});
