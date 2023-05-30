
const ulElement = document.querySelector('.container main ul');
const h2Element = document.querySelector('.container main h2');

const creatLiElement = (nome, valor) => {
    const liElement = document.createElement('li');
    liElement.innerHTML = 
    `<b>${nome}<b/>
    <span>${valor}</span>`
    return liElement;
};

export const renderCoins = (coins, baseCoin) => {
    ulElement.innerHTML = '';
    h2Element.innerHTML = `Valores Referentes a ${baseCoin}`;
    coins.forEach(moeda => {
        const name = moeda.name;
        const value = moeda.value;
        const liElement = creatLiElement(name, value)
        ulElement.appendChild(liElement);
    });

}