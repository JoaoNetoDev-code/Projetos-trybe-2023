  // Adicione seu código aqui
  const numbers = [19, 21, 30, 3, 45, 22, 15];
numbers.find((numero) => {
   if (numero % 3 === 0 && numero % 5 === 0) {
    console.log(numero);
   };
});