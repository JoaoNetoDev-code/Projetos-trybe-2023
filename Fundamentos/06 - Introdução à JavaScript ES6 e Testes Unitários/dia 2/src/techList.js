const tecnologias = ['JavaScript', 'Python', 'Java', 'Ruby', 'C#'];

const nome = 'João Neto';

const ordenaArray = (array) => {
    for(let index =0; index < array.length; index +=1) {
        array[index].split(' ');
    }
    
    arrayOrdenado.sort((a,b) => a - b);
}
console.log(ordenaArray(tecnologias))

const techList = (array, nome) => {
  const objectArray = [];
  try {
    if (array === null) {
      throw new Error("Vazio!");
    }

    for (let index = 0; index < array.length; index += 1) {
      const object = {};
      object.tech = array[index];
      object.name = nome;
      objectArray.push(object);
    }

    return objectArray;
  } catch (erro) {
    return erro.message;
  }
};

console.log(techList(tecnologias, nome));


module.exports = techList;
