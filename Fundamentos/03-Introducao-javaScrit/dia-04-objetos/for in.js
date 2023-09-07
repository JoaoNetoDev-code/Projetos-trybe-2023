  ////////////////////////////////////////////////////////////
//   1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo o nome dela. Para isso,
//    utilize a sintaxe meuObjeto.chave. Então, o valor esperado no console é:Bem-vinda, Margarida


// let info1 = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
//   console.log('Seja Bem Vinda ' + info1.personagem + ' :D')

//////////////////////////////////////////////////////

// 2 - Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ 
// e o valor ‘Sim’ e, em seguida, imprima o objeto no console. 
// Para isso, use a sintaxe meuObjeto['chave'] = valor.
//  Então, o valor esperado no console é:
// let info2 = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// info2['recorrente'] = 'Sim'
// console.log(info2)

////////////////////////////////////////////////

// 3 - Faça um for/in que mostre todas as chaves do objeto.
//  O valor esperado no console é:

// let info3 = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// info3['recorrente'] = 'Sim'

// for(keys in info3) {
//   console.log(keys)
// }

//////////////////////////////////////////////////

// 4 - Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto. 
// O valor esperado no console é:

// let info4 = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// info4['recorrente'] = 'Sim'

// for (let keys in info4) {
//   console.log(info4[keys])
// }

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes
//  valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, 
//  de acordo com cada uma das chaves. O valor esperado no console é:

//   let info4 = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
//   info4['recorrente'] = 'sim'


// let info5 = {
//   personagem:'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrente:'sim'
// } 


// // console.log(info4.personagem + ' e ' + info5.personagem)
// // console.log(info4.origem + ' e ' + info5.origem)
// // console.log(info4.nota + ' e ' + info5.nota)
// // console.log('Ambos recorrentes')

// for (let keys in info4) {
//   if (
//     keys === 'recorrente' &&
//     info4[keys] === 'sim' &&
//     info5[keys] === 'sim'){
//     console.log('Ambos recorrentes')
//     }else {
//       console.log( info4[keys] + ' e ' + info5[keys])
//     }
    
// } 

// Com base neste objeto, faça os exercícios a seguir.

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos:[
    {
    titulo:'O Pior Dia de Todos',
    autor: 'Daniela Kopsch',
    editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor.nome +' '+ leitor.sobrenome + ' Se chama, ' +leitor.livrosFavoritos[0].titulo)

// 2 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto que contenha as seguintes informações:


leitor.livrosFavoritos.push({
  titulo:'Harry Potter e o Prisioneiro de azkaban',
  autor: 'JK Rowling',
  editora:'Rocco',
})
console.log(leitor)


// 3 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem {quantidade} livros favoritos”,
//  em que “{quantidade}” corresponde à quantidade de livros favoritos e é um número gerado automaticamente por seu código.

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos ');
