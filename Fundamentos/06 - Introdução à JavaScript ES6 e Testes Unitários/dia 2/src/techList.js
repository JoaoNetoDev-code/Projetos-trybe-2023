const { error } = require("console");

const nome = 'João Neto';
const tecnologias = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];

const techList = (array, nome) => {
  const arrayTch = array.slice().sort()
  const objectArray = [];
  
  try {

    if (array.length === 0) {
      throw new Error ('Vazio!')
    }
    
    arrayTch.forEach(item => {
      const object = {};
      object.tech = item;
      object.name = nome;
      objectArray.push(object);
      });

    return objectArray;

  } catch (error) {
    return error.message;
  }
};

console.log(techList(tecnologias, nome));


module.exports = techList;