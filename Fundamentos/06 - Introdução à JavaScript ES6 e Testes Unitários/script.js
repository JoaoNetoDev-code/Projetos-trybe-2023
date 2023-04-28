
const checkPerson = (name,age) => {
    if (name === null || age === null) {
        throw new Error('Todas as informações são necessárias');
      }
      if(age < 18) {
        throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
      }
}

const studentRegister = (name, age) => {
    // seu código aqui
    try{
        checkPerson(name,age);

        return`${name}, seja bem-vindo(a) á AuTrybe!`;

    }catch (error) {
         return error.message
    }

  }
  console.log(studentRegister('joão Neto','22'))