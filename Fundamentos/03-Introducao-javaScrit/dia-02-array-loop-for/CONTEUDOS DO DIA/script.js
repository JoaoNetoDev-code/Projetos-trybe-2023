// let nomePessoa1 = "João";
// let sobrenomePessoa1 = "Nascimento";
// let nomePessoa2 = "Renan";
// let sobrenomePessoa2 = "Fernandes";

// // Gerando uma variável com nome e sobrenome juntos:
// let nomeCompletoPessoa1 = nomePessoa1 + " " + sobrenomePessoa1;

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// console.log(tasksList.length);
// // 3

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let searchForFirstTask = tasksList[0];
// console.log(searchForFirstTask);
// // Tomar café

// let searchForLastTask = tasksList[tasksList.length - 1];
// console.log(searchForLastTask);
// // Brincar com o cachorro

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
// console.log(tasksList);

// // ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// tasksList.unshift('Fazer exercícios da Trybe ainda hoje');  // adiciona mais uma tarefa
// console.log(tasksList);

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.pop();  // remove a última tarefa
// console.log(tasksList); // pop remove o ultimo item da lista!

// tasksList.shift();  // remove a última tarefa
// console.log(tasksList); // remove o primeiro item da lista!
// // [ 'Tomar café', 'Reunião' ]

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let indexOfTask = tasksList.indexOf('Reunião');
// console.log(indexOfTask);
//  // indexof usado para procurar o indece de um item dentro de um array
// // 1


// let cars = ['Saab', 'Volvo', 'BMW', 'maverick','combi'];
// // console.log(cars[0]); // Saab
// // console.log(cars[1]); // Volvo
// // console.log(cars[2]); // BMW

// for (let index = 0; index < cars.length; index += 1) {
//     console.log(cars[index]);
// }

// let numeros = [1,2,3,4,5];
// for(let numero of numeros) {
//   console.log(numero);
// }

// // resultado: 
// //1
// //2
// //3
// //4
// //5

// let word = 'Hello';
// for (let letter of word) {
//   console.log(letter);
// }
// // resultado:
// // "H"
// // "e"
// // "l"
// // "l"
// // "o"

// let arrOfNumbers = [10, 20, 30];
// for (let sum of arrOfNumbers) {
//   sum += 1;
//   console.log(sum);
// }
// // 11
// // 21
// // 31

// ///É importante ressaltar que o for/of não irá alterar o array, e sim trazer os valores de dentro adicionando 1 à soma.
// console.log(arrOfNumbers);
// // Resultado: [10, 20, 30]


// let counter = 0;

// while(counter !== 5) {
//   counter += 1;
  
// }


let dado1 = Math.ceil(Math.random() * 6);
console.log('resultado dado 1:', dado1);
let dado2 = Math.ceil(Math.random() * 6);

while (dado1 !== dado2) {
  dado2 = Math.ceil(Math.random() * 6);
  console.log('resultado dado 2:', dado2);
}
