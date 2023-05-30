import Swal from 'sweetalert2'

import { renderCoins } from './components';
import { fethExchange } from './services/exchange';

import './style.css';
import './reset.style.css';
const btnElement = document.querySelector('header form button');

btnElement.addEventListener('click', (event) => {
    const inputElement = document.querySelector('header form input');
    const inputValue = inputElement.value.toUpperCase();

    if(!inputValue) {
        Swal.fire({
            title: 'Erro!',
            text: 'Você Precisa Digitar uma Moeda',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
          return;
    }
    fethExchange(inputValue)
        .then((data) => {
        const base = data.base;
        const rates = data.rates;

        const ratesArray = Object.entries(rates)
        
        const objetoFinal = ratesArray.map((rateCoin) => {
            const [name, value] = rateCoin;
            return {
                name,
                value,
            }
        })
        renderCoins(objetoFinal, base)
    }).catch (error => {
        Swal.fire({
            title: 'Erro!',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    })
})