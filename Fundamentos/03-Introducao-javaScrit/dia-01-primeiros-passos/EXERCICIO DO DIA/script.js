// let a = 4;
// let b = 3;
// let resultado;

// resultado = a + b;
//  console.log(resultado );

//  resultado = a - b;
//  console.log(resultado)

//  resultado = b * a;
//  console.log(resultado)

//  resultado = a / b;
//  console.log(resultado)
 
//  resultado = a ** b;
//  console.log(resultado)

 ///////////////////////////////////////////

// let leite = 5
// let pão = 1
// let comentario;

//  if (leite > pão) {
//     comentario = 'leite  é mais caro que pão';
//  } else if (pão > leite) {
//     comentario = 'pão é mais caro que leite!';
// }
// else {
//     comentario = 'ambos tem o mesmo preço!';
// } console.log(comentario)

////////////////////////////////////////////////

// let numero3 = 15
// let numero2= 13
// let numero1 = 22

// if (numero3 > numero2 && numero3 > numero1) 
// {
//     console.log(numero3 + ' é o maior numero');
// }

// else if (numero2 > numero3 && numero2 > numero1) 
// {
//     console.log(numero2 + ' é o maior numero');
// }

// else 
// {
//     console.log(numero1 + ' é o maior numero');
// }

///////////////////////////////////////////////////////////////

// valor1 = -1


// if (valor1 < 0) 
// {
//     console.log(valor1 + ' é um numero negative ');
// }
// else if (valor1 === 0) 
// {
//     console.log( valor1 + ' é zero ');
// }
// else if (valor1 > 0) 
// {
//     console.log(valor1 + ' é um numero positivo ');
// }

//////////////////////////////////////////////////////////////////////////

// let lado1 = 80;
// let lado2 = 70;
// let lado3 = 30;
// let soma = lado1 + lado2 + lado3;
// let resultado;


// if ( soma === 180) 
// {
//     resultado = true
// }
//     else if (soma < 180) 
// {
//     resultado = false;
// }
//     else if (soma > 180)
// {
//     resultado = false;
// }
// else 
// {
//     resultado = 'Erro!';
// }

// console.log(resultado) 

/////////////////////////////////////////////

let rei = 'move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.'
let rainha ='pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente'
let cavalo = 'move-se duas casas na horizontal ou na vertical e depois uma para o lado. O movimento completo do cavalo forma um «L» sobre o tabuleiro.'

let peça ='cavalo'

switch (peça) {
            case 'rei':
            console.log(' O Rei move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.');
            break
            case 'rainha':
            console.log('A Rainha pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente')
            break
            case 'cavalo':
            console.log('O Cavalo move-se duas casas na horizontal ou na vertical e depois uma para o lado. O movimento completo do cavalo forma um «L» sobre o tabuleiro.')
             default: console.log('Desculpe sua peça não foi registrada.')
            }
