// let diasDaSemana = {
//   1: 'domingo',
//   2: 'segunda-feira',
//   3: 'terça-feira',
//   4: 'quarta-feira',
//   5: 'quinta-feira',
//   6: 'sexta-feira',
//   7: 'sábado',
// };

// diasDaSemana.1; // SyntaxError: Unexpected number
// console.log(diasDaSemana['1']); // domingo

// let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };
  
//   let infoDoBanco = 'banco';
//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
//   console.log(conta.agencia); // 0000
//   console.log(conta['agencia']); // 0000
  
//   console.log(conta.banco.cod); // 012
//   console.log(conta['banco']['id']); // 4

// let usuario = {
//     id: 99,
//     email: 'jakeperalta@gmail.com',
//     infoPessoal: {
//       nome: 'Jake',
//       sobrenome: 'Peralta',
//       endereco: {
//         rua: 'Smith Street',
//         bairro: 'Brooklyn',
//         cidade: 'Nova Iorque',
//         estado: 'Nova Iorque',
//       },
//     },
//   };
  
//   console.log(usuario['id']); // 99
//   console.log(usuario.email); // jakeperalta@gmail.com
  
//   console.log(usuario.infoPessoal.endereco.rua); // Smith Street
//   console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

// let moradores = [
//     {
//       nome: 'Luíza',
//       sobrenome: 'Guimarães',
//       andar: 10,
//       apartamento: 1005,
//     },
//     {
//       nome: 'William',
//       sobrenome: 'Albuquerque',
//       andar: 5,
//       apartamento: 502,
//     },
//     {
//       nome: 'Murilo',
//       sobrenome: 'Ferraz',
//       andar: 8,
//       apartamento: 804,
//     },
//     {
//       nome: 'Zoey',
//       sobrenome: 'Brooks',
//       andar: 1,
//       apartamento: 101,
//     },
//   ];
  
//   let primeiroMorador = moradores[0];
//   console.log(primeiroMorador); // { nome: 'Luíza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
//   console.log(primeiroMorador['andar']); // 10
  
//   let ultimoMorador = moradores[moradores.length - 1];
//   console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
//   console.log(ultimoMorador.nome); // Zoey

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden:2, silver:3
//     }
// };

// player.bestInTheWorld = [2006,2007,2008,2009,2010,2018]

// // console.log('a jogadora ' + player.name +' '+ player.lastName + ' foi considerada a melhor do mundo com apenas ' + player.age + ' anos!')
// // console.table(player)

// // console.log('A jogadora '+ player['name'] +' '+ player['lastName']+ ' foi eleita a melhor do mundo por 6 vezes ' + player['bestInTheWorld'])

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver  + ' Medalhas de prata') 

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
  
//   for (let index in car) {
//     console.log(index, car[index]);
//   }

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for ( index in names) {
//     console.log('Olá ' + names[index])
//   }

  // let car = {
  //   model: 'A3 Sedan',
  //   manufacturer: 'Audi',
  //   year: 2020
  // };
  // for (index in car) {
  //   console.log(index, car[index])
  // }

  // let student = {

  // }
  //   key1= 'firstName'
  // firstName = 'João'
  //   key2= 'lastName'
  // lastName = 'Neto'
  // key3= 'phone'
  // phone = '81989703489'

  // function addProperty(object, key, value) {
  //   object[key] = value;
  // }



  // addProperty(student,key1,firstName)
  // addProperty(student,key2,lastName)
  // addProperty(student,key3,phone)
  // console.log(student)

//   let coolestTvShow = {
//   name: 'BoJack Horseman',
//   genre: 'adult animation',
//   createdBy: 'Raphael Bob-Waksberg',
//   favoriteCharacter: 'Princess Carolyn',
//   quote: 'Princess Carolyn always lands on her feet.',
//   seasons: 6,
// };

// // for (let key in coolestTvShow) {
// //   console.log(coolestTvShow[key])
// // }
// console.log(Object.keys(coolestTvShow));

// let student1 = {
//   html: 'Muito Bom',
//   css: 'Bom',
//   javascript: 'Ótimo',
//   softskills: 'Ótimo',
// };

// let student2 = {
//   html: 'Bom',
//   css: 'Ótimo',
//   javascript: 'Ruim',
//   softskills: 'Ótimo',
//   git: 'Bom', // chave adicionada
// };

// // console.log(Object.keys(student1))
// // console.log(Object.keys(student2))

// function listSkills(student) {
//   let arrayOfSkills = Object.keys(student);
//   for (let index in arrayOfSkills) {
//     console.log(arrayOfSkills[index] + ', Nível: ' + student[arrayOfSkills[index]]);
//   }
// };

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);

// let coolestTvShow = {
//   name: 'BoJack Horseman',
//   genre: 'adult animation',
//   createdBy: 'Raphael Bob-Waksberg',
//   favoriteCharacter: 'Princess Carolyn',
//   quote: 'Princess Carolyn always lands on her feet.',
//   seasons: 6,
// };

// // for (let property in coolestTvShow) {
// //   console.log(coolestTvShow[property]);
// // }

// console.log(Object.values(coolestTvShow));

// // [
// //   'BoJack Horseman',
// //   'adult animation',
// //   'Raphael Bob-Waksberg',
// //   'Princess Carolyn',
// //   'Princess Carolyn always lands on her feet.'
// //    6
// // ]


// let student = {
//   html: 'Muito Bom',
//   css: 'Bom',
//   javascript: 'Ótimo',
//   softskill: 'Ótimo',
// };

// function listSkillsValuesWithFor(student) {
//   let skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

// function listSkillsValuesWithValues(student) {
//   return Object.values(student);
// }

// // Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));


// let countries = {
//   franca: 'Paris',
//   brasil: 'Brasília',
//   espanha: 'Madrid',
//   portugal: 'Lisboa',
// };
// let pairKeyValue = Object.entries(countries);
// console.log(pairKeyValue);
// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };

// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto-destino.

// Object.assign(destino, objeto1);
// Object.assign(destino, objeto1, objeto2);
// Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

// let person = {
//   name: 'Alberto',
//   lastName: 'Gomes',
//   age: 20,
// };

// let info = {
//   age: 23,
//   job: 'engenheiro',
// };

// let family = {
//   children: ['Maria', 'João'],
//   wife: 'Ana',
// };

// Object.assign(person, info, family)
// console.log(person)

// /* Output
//   { name: 'Alberto',
//   lastName: 'Gomes',
//   age: 23,
//   job: 'engenheiro',
//   children: [ 'Maria', 'João' ],
//   wife: 'Ana'
//   } */

  // let person = {
  //   name:'Roberto',
  // };
  
  // let lastName = {
  //   lastName: 'Silva',
  // };
  
  // let newPerson = Object.assign({},person,lastName);
  // newPerson.name = 'Gilberto';
  // console.log(newPerson);
  // console.log(person);

//   let objeto = { a: 1, b: 2, c: 3 };

// for (let property in objeto) {
//   console.log(property + ' = ' + objeto[property]);
// }
// console.log(Object.keys(objeto))

// let starships = {
//   option1: "Tardis",
//   option2: "Millennium Falcon",
//   option3: "Enterprise",
//   option4: "Heart of Gold"
// }

// console.log(Object.values(starships))

// let top3Albums = {
//   1: 'Nightfall in Middle-Earth',
//   2: 'Imaginations from the Other Side',
//   3: 'Somewhere Far Beyond',
// };
// console.log(Object.entries(top3Albums))
let casa

Object.casa(cozinha = true,)
console.log(casa)