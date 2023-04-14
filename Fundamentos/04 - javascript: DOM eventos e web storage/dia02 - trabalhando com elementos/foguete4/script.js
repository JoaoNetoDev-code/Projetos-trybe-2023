const h1 = document.createElement('h1');
    h1.innerText = 'TrybeTrip - Agência de Viagens';
    document.body.appendChild(h1);  //requisito 1

const main = document.createElement('main');
    main.className ='main-content';
    document.body.appendChild(main); //// requisito 2

const sectionCenter = document.createElement('section');
    sectionCenter.className = 'center-content';
    main.appendChild(sectionCenter); /// requisito 3

const Paragraph = document.createElement('p');
    Paragraph.innerText = 'talvez pegue!';
   sectionCenter.appendChild(Paragraph); /// requisto 4

const sectionLeft = document.createElement('section');
    sectionLeft.className = 'left-content'
    main.appendChild(sectionLeft); /// requisito 5


const sectionRight = document.createElement('section');
    sectionRight.className = 'right-content'
    main.appendChild(sectionRight); /// requisito 6

const img = document.createElement('img');
    img.src ='https://picsum.photos/200';
    img.className = 'small-image';    
    sectionLeft.appendChild(img); //// requisito 7

const ul =  document.createElement('ul');
const numeros = ['um','dois','três','quatro','cinto','seis','sete','oito','nove','dez'];

for (let index =0; index < numeros.length;index +=1) {
    const li = document.createElement('li');
    li.innerText = numeros[index];
    ul.appendChild(li); //// requisito 8
}
sectionRight.appendChild(ul);

for (let index =0; index <3; index +=1) {
    const h3 = document.createElement('h3');
    h3.innerText = index;
    main.appendChild(h3)
}           //// requisito 9 feito


///////////////////////// REQUISITOS BONUS ///////////////////////

const title = document.querySelector('h1');
    title.className = 'title'; /// requisito 1


const h3 = document.getElementsByTagName('h3');
for (let index =0; index <3; index +=1) {
    h3[index].className = 'description'; //// requisito 2
}

// main.removeChild(sectionLeft)[0]; /// requisito 3

const centralize =  document.getElementsByClassName('center-content')[0];
    centralize.marginRight = 'auto'; /// requisito 4

const trocaCorFundo = document.getElementsByClassName('main-content')[0];
    trocaCorFundo.style.backgroundColor= 'green';

lista.lastChild.remove();
lista.lastChild.remove();