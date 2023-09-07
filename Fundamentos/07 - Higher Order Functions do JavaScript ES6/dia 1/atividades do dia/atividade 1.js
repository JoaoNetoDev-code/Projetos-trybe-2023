const emailGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  const estrutura = { fullName, email: `${email}@trybe.com` };
  return estrutura;
};

const newEmployees = (emailGenerator) => {
    const employees = {
        id1: emailGenerator('Pedro Guerra'),
        // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: emailGenerator('Luiza Drumond'),
        // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: emailGenerator('Carla Paiva'),
        // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

// console.log(newEmployees(emailGenerator));

/// quesito 1

const checkNumbers = (numeroEscolhido, numeroAleatorio) => numeroEscolhido === numeroAleatorio;

const sorteio = (numeroEscolhido) => {
const numeroAleatorio = Math.floor((Math.random() * 5) + 1);
  if (checkNumbers(numeroEscolhido, numeroAleatorio)) {
   return 'Parabens, você ganhou!'
  } else { return 'Tente novamente!'};
};
console.log(sorteio(1));