const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";


const paragraph1 = document.getElementsByClassName('style-paragraph');
paragraph1[0].style.fontsize ='1.5rem';
paragraph1[0].style.color = 'green';
paragraph1[1].style.color = 'red';
paragraph1[1].style.fontsize = '1.5rem';

const subtitle = document.getElementsByTagName('h4')[0];
subtitle.style.color = 'blue';
subtitle.innerText = 'mudando testo h4'