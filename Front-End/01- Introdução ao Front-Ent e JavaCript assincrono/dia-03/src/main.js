import { renderCoins } from './components';
import { fethExchange } from './services/exchange';

import './style.css';
import './reset.style.css';
const btnElement = document.querySelector('header form button');

btnElement.addEventListener('click', () => {
    const inputElement = document.querySelector('header form input');
    const inputValue = inputElement.value;
    fethExchange(inputValue).then((data) => {
        const rates = data.rates;
        const base = data.base;
        const ratesArray = Object.entries(rates)
        
        const objetoFinal = ratesArray.map((rateCoin) => {
            const [name, value] = rateCoin;
            return {
                name,
                value,
            }
        })
        renderCoins(objetoFinal, base)
    });
})