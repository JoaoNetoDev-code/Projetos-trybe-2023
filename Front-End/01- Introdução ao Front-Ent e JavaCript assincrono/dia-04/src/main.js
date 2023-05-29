import './style.css';

const btnElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const preElement = document.querySelector('pre');

const handleClick = async () => {
  const cep = inputElement.value;

  try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();
    preElement.innerHTML = JSON.stringify(data);
    return data;
  } catch (error) {
    return error.message;
  }
};

btnElement.addEventListener('click', handleClick);
