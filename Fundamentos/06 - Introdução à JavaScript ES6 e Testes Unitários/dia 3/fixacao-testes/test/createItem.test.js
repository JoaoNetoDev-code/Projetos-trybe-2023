const createItem = require('../src/ createItem');
describe('a função createItem', () => {
  test('cria um item válido',() => {
  expect(createItem('joao', 10, 10, 10)).not.toBeNull();
  });
  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('joão',10,10)).toHaveProperty('quantity',0);
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(()=> createItem()).toThrow();
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(true,10,101,10)).toThrow();
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('joão',10,-5,10)).toThrow();
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('joao',10,0,51)).toThrow();
  });
});