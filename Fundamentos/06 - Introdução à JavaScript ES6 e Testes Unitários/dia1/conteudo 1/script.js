

window.onload = () => {
  const promo = [
    {product: 'bola de beach tennis', price: 29.99},
    {product: 'mochila de trilha 20 litros', price: 120.99},
    {product: 'capacete de ciclista', price: 180.59},
    {product: 'toalha compacta de secagem', price: 39.99},
    {product: 'kit 5 camisetas Dry Fit', price: 99.99},
    {product: 'caneleiras de peso - 3kg (par)', price: 44.99},
    {product: 'bola de ginástica e pilates', price: 149.59},
    {product: 'óculos de natação', price: 18.99},
    {product: 'capa protetora de prancha de surf', price: 89.59},
    {product: 'bola de basquete', price: 39.99},
  ];

  const btnSend = document.querySelector('#send-button');

  btnSend.addEventListener('click', () => {
  const nome = document.querySelector('#name-id').value;
  const numero = document.querySelector('#number-id').value;

  showPromo(nome,numero);
  });

  const showPromo = (name, number) => {
    const firstText = document.querySelector('#text-initial');
    const secondText = document.querySelector('#text-final');

    const checkName = (name) => {
      let letters = /[aA-zZ]+/;
      
      if (!name.match(letters)) {
        throw new Error('É necessário digitar um nome válido');
      }
    }
    // Segunda parte
    const checkNumber = (number) => {
    if  (isNaN(number)) {
        throw new Error('É necessário digitar um número');
    }
    }
    // Terceira parte
    const checkPromo = (number) => {
      for (let index = 0; index < promo.length; index += 1) {
        if (number - 1 === index) {
          return promo[index];
        }
      }
    }
    const checkValidRange = (number) => {
      if (number > 10 || number < 1) {
        throw new Error('O numero escolhido deve estar entre 1 e  10.')
      }
    }
    try {
      checkValidRange(number)
      checkName(name);
      checkNumber(parseInt(number));
      const productObject = checkPromo(number);
  
      firstText.innerHTML = `Boas-vindas, ${name}!`;
      secondText.innerHTML = `A promoção do dia é: 
        ${productObject.product} no valor de R$ ${productObject.price}`;
    } catch(err) {
      secondText.innerHTML = err.message;
    }
  }

}


