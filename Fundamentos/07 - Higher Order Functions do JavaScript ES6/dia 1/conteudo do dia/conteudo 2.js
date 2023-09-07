const names1 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

//Adicione seu código aqui
const hasName = (arr, name) => {
  return arr.some((item) => item === name)
};

console.log(hasName(names1, 'Ana'));
console.log(hasName(names1, 'Pedro'));