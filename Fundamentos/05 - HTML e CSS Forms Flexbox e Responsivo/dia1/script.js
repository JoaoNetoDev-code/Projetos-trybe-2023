const whereAreYou = document.getElementById('where-are-you');

const parent = whereAreYou.parentElement;
    parent.style.color = 'green';

const FirstChildOfChild = document.getElementById('first-child-of-child');
    FirstChildOfChild.innerText = 'texto feito com InnerText!'

const firstChild1 = parent.firstElementChild;

const firtChild2 = whereAreYou.previousElementSibling;

const attention = whereAreYou.nextSibling;

const ThirdChild1 = whereAreYou.nextElementSibling;

const ThirdChild2 = parent.children[2];