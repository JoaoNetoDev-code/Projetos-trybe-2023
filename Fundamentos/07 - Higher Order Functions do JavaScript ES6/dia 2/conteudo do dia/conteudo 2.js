const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];


const productAndPrice = (array1, array2) => array1.map((products, index) => ({ [products]: array2[index] } ));
console.log(productAndPrice(products,prices));