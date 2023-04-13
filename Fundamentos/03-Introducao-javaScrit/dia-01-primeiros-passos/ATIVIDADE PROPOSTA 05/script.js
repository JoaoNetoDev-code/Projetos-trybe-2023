// let comida = 'pão na chapa';
// let bebida = 'café';

// if (bebida === 'café' && comida === 'pão na chapa') {
//   console.log('Muito obrigado(a) pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }

// let conditionOne = true;
// let conditionTwo = false;

// console.log(conditionOne && conditionTwo);

// let cenouras = true;
// let leite = true;
// let arroz = true;
// let feijao = true;

// let listaDeCompras = cenouras && leite && arroz && feijao;

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// console.log(10 + 5 * 5); // 10 + 25

let currentHour = 20;
let message = ""

if (currentHour >= 22) {
message = 'Não deveriamos comer nada, é hora de dormir';
}
else if (currentHour >= 18 && currentHour < 22) {message = 'Rango da noite, vamos jantar :D';
}
else if (currentHour >=14 && currentHour < 18) 
{
message = 'Vamos fazer um bolo pro cafe da tarde?';
}
else if (currentHour >= 11 && currentHour < 14) {message = 'Hora do almoço!!';
}
else if (currentHour >=4 && currentHour <= 11) {message = 'Humm, cheiro de café recém-passado';
}
console.log(message);