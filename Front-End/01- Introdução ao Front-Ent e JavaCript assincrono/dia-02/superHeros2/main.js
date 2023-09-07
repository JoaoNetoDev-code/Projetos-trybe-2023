import Swal from 'sweetalert2';

import './src/style.css';

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

const ACCESS_TOKEN = '760725542440615';
const BASE_URL = `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}`;
const MAX_HEROES = 731; // total de heroís Data 24/05/2023...
// const MAX_HEROES = 1000; UTILIZE ESSE VALOR PARA TORNA O TRATAMENTO DE ERRO POSSIVEL!

const randomId = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (e) => {
  e.preventDefault();
  const id = randomId();

  fetch(`${BASE_URL}/${id}`)
    .then((result) => result.json())
    .then((data) => {
      img.src = data.image.url;
      name.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      text: 'Heroi não Encontrado!',
      title: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
