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

 /////////////////////////////////////////// 01

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

//////////////////////////////////////////////// 02

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

///////////////////////////////////////////////////////////////  03

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

//////////////////////////////////////////////////////////////////////////  04

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

///////////////////////////////////////////// 05

// let rei = 'move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.'
// let rainha ='pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente'
// let cavalo = 'move-se duas casas na horizontal ou na vertical e depois uma para o lado. O movimento completo do cavalo forma um «L» sobre o tabuleiro.'

// let peça ='cavalo'

// switch (peça) {
//             case 'rei':
//             console.log(' O Rei move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.');
//             break
//             case 'rainha':
//             console.log('A Rainha pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente')
//             break
//             case 'cavalo':
//             console.log('O Cavalo move-se duas casas na horizontal ou na vertical e depois uma para o lado. O movimento completo do cavalo forma um «L» sobre o tabuleiro.')
//              default: console.log('Desculpe sua peça não foi registrada.')
//             }

////////////////////////////////////////// 06

// let nota = 30
// let resultado;
 
// if (nota < 0 || nota > 100 ){
//     resultado = 'nota invalida';
// }
// else if (nota >= 90) {
//     resultado = 'Parabens tirou A';
// } else if (nota >= 80) {
//     resultado = 'Parabens tirou B';
// } else if (nota >= 70) {
//     resultado = 'Poderia ser melhor tirou C';
// }else if (nota >= 60) {
//     resultado = 'D';
// }else if ( nota >= 50) {
//     resultado = 'E';
// }else {
//     resultado =  'F';
// }
// console.log (resultado)

//////////////////////////////////////////////////// 07

// let numeroA = 11
// let numeroB = 35
// let numeroC = 41

// if (numeroA % 2 === 0 || numeroB % 2 ===0 || numeroC % 2 === 0) {
//     console.log(true +' Existe! pelo menos um numero par')
// } 
// else {console.log( false + ' Não existem numeros pares')
// }

////////////////////////////////////////////////////// 08

// let numeroA = 11;
// let numeroB = 30;
// let numeroC = 40;


// if (numeroA % 2 === 1 || numeroB % 2 ===1 || numeroC % 2 ===1)

// {
//     console.log(true + ' Existe! pelo menos um numero ímpar')
// } else 
// {
//     console.log( false + ' Não existem numeros ímpares');
// }

////////////////////////////////////////////////////////// 09

// let produto = 3;
// let custo = 1;

// if (custo >= 0 && produto >= 0) {
//     let lucro = produto  - custo;
//     let lucroTotal = lucro * 1000;
//     console.log(lucroTotal);
// }

////////////////////////////////////////////////////////// 10




let salario =7000
let taxaINSS;
let impostoDeRenda;
let salarioLiquido;


if(salario <= 1556.94 && salario > 0) 
{ taxaINSS =0.08}
else if (salario >= 1556.95 && salario <= 2594.92) 
{     taxaINSS =0.09}
else if (salario >= 2594.93 && salario <= 5189.82) 
{ taxaINSS =0.11}
else if (salario > 5189.82) { taxaINSS =570.88}
else {taxaINSS = 'sem valores para deduzir!'}
console.log('sua taxa para com o INSS é ' + taxaINSS)


if (salario <= 1903.98 && salario >0) { impostoDeRenda = 'insento de imposto de renda!';}
else if (salario >= 1903.99 && salario  <= 2826.65) { impostoDeRenda =0.075}
else if (salario >= 2826.66 && salario <= 3751.05) { impostoDeRenda =0.15}
else if (salario >= 3751.06 && salario <= 4664.68) { impostoDeRenda =0.225}
else if (salario > 4664.68) {impostoDeRenda =0.275}
else {impostoDeRenda = 'sem valores para deduzir!'}
console.log('seu IR é de ' + impostoDeRenda)

if (salario > 0 && salario <= 5189.81) {
    salarioLiquido = salario - (( taxaINSS * salario ) + ( impostoDeRenda * salario ))
    console.log('seu salario Liquido é de ' + salarioLiquido)}
    else if ( salario > 5189.82) { salarioLiquido = salario - ((taxaINSS) + (impostoDeRenda * salario))
        console.log('seu salario Liquido é de ' + salarioLiquido)}
    else {console.log('você não possoi salario para este mês')}

////////////////////////////////////////////////////////////////////// 11