import validator from 'validator';
import './style.css';

const verificar = validator;
const imputText = document.querySelector('#value');
const buttonValidator = document.querySelector('#button');
const imputTypeValidator = document.querySelector('#option');
const textExit = document.querySelector('#textoDeSaida');
const UUID_VERSION = 4;

buttonValidator.addEventListener('click', (event) => {
  event.preventDefault();

  const campos = {
    cpf: verificar.isTaxID(imputText.value, 'pt-BR'),
    hexColor: verificar.isHexColor(imputText.value),
    email: verificar.isEmail(imputText.value),
    uuid: verificar.isUUID(imputText.value, UUID_VERSION),
    url: verificar.isURL(imputText.value),
  };

  textExit.innerHTML = `A validação retornou ${campos[imputTypeValidator.value]}`;
});
