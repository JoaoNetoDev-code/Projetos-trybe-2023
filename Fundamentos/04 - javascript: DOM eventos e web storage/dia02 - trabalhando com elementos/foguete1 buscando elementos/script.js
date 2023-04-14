
const WhereAreYou = document.getElementById('where-are-you');
    WhereAreYou.style.color =  'green';

const parent = WhereAreYou.parentElement;
parent.style.color = 'red';

const firstChildOfChild = document.getElementById('first-child-of-child');
    firstChildOfChild.innerText = 'texto feito com innerTEXT porem tb poderia ter sido feito com innerHTML';

const firstChild =  parent.firstElementChild;

const firstChild2 =  WhereAreYou.previousElementSibling;

const attention = WhereAreYou.nextSibling;

const thirdChild = parent.lastElementChild.previousElementSibling;

