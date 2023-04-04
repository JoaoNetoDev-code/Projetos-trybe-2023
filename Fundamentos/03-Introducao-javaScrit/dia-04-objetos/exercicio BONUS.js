

//       // //   Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, 
// // a chave a ser adicionada e o valor dela. ok
// function addTurn(Object,keys,value) {
//     Object[keys] = value
// }
//     addTurn(lesson2,'turno','noite');
//     console.log(lesson2)



//     // // Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

// function listKeys(Objecto) {
//     return Object.keys(Objecto);
// }
//     console.log(listKeys(lesson1));


// // // Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

// function sizeObjetct (objeto) {
//     return Object.keys(objeto).length;
// }

// console.log(sizeObjetct(lesson2))


// // // Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

// function valueObject (objeto) {
//     return Object.values(objeto);
// } 
//     console.log(valueObject(lesson3))

// // // Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, 
// // portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:


let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


  let allLessons = Object.assign({}, {lesson1,lesson2,lesson3});

  console.log(allLessons)

// Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

  function totalEStudantes(lessons) {
    let total = 0;
    let keys = Object.keys(lessons);

    for (index in keys) {
        total += lessons[keys[index]].numeroEstudantes;

    }
    return total;
  }

  console.log(totalEStudantes(allLessons));

//   Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto. 
//   Por exemplo:

// console.log(getValueByNumber(lesson1, 0));
// // Output: 'Matemática'

function verificarkey (objeto, value) {
 return Object.values(objeto)[value];
}

console.log(verificarkey (lesson1,[0]));

// Crie uma função que verifique se o par chave/valor existe na função. 
// Essa função deve possuir três parâmetros:o objeto, o nome da chave e o valor dela. 
// Por exemplo:

// console.log(verifyPair(lesson3, 'turno', 'noite'));
// // Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// // Output: false

function verifiqueObject ( objeto,keys,value) {
    let entradas = Object.entries(objeto);
    let confere = false;
    for (let index in entradas) {
        if (entradas[index][0] === keys && entradas[index][1] === value) confere = true;

    }
    return confere
}
console.log(verifiqueObject(lesson2,'professor','Carlos'));