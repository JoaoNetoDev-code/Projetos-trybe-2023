import './style.css';

import Swal from 'sweetalert2';

const btnElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const preElement = document.querySelector('pre');

const handleClick = async () => {
  const cep = inputElement.value;
  try {
    if (!cep) throw new Error('você precisa passar um CEP');
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();
    console.log(data);
    preElement.innerHTML = JSON.stringify(data);
    return data;
  } catch (error) {
    Swal.fire({
      title: 'Erro!',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'ok',
    });
  }
};

btnElement.addEventListener('click', handleClick);
