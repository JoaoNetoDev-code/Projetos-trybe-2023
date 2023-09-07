import './style.css';

const btnDog = document.querySelector('#btnDog');
const btnCat = document.querySelector('#btnCat');
const btnSurprise = document.querySelector('#btnSuprise');
const imgPets = document.querySelector('#randomPetsImg');

const LINK_DOGAPI = 'https://dog.ceo/api/breeds/image/random';
const LINK_CATAPI = 'https://api.thecatapi.com/v1/images/search';

btnDog.addEventListener('click', () => {
  fetch(LINK_DOGAPI)
    .then((Response) => Response.json())
    .then((data) => {
      const urlDog = data.message;
      imgPets.src = urlDog;
    });
});

btnCat.addEventListener('click', () => {
  fetch(LINK_CATAPI)
    .then((result) => result.json())
    .then(([data]) => {
      const urlCat = data.url;
      imgPets.src = urlCat;
    });
});

btnSurprise.addEventListener('click', () => {
  Promise.any([fetch(LINK_CATAPI), fetch(LINK_DOGAPI)])
    .then((result) => result.json())
    .then((data) => {
      const urlPet = data.message || data[0].url;
      imgPets.src = urlPet;
    });
});
