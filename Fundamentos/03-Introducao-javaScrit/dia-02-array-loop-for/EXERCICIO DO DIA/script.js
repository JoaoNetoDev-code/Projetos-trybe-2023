
// for (let index = 0; index < numbers.length;index +=1) {
    
//     console.log(numbers[index]);
// }

    ////////////////////////////////////////

// for (let index = 0; index < numbers.length;index +=1) {
//     sum += numbers[index];
// }console.log(sum)

///////////////////////////////////////////////////////

// for (let index=0;index < numbers.length;index +=1) {
//     sum += numbers[index];
// }
//  let avarege = sum / numbers.length;
//  console.log('Media ' + avarege)
// console.log('Soma total ' + sum)

// if (avarege > 20) {
//     console.log('Valor maior que 20');
// } else {
//     console.log('Valor menor ou igual 20');
// }

///////////////////////////////////////////////////////////



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0
let maiorNumbers =numbers[0]

for (let index = 1;index < numbers.length;index += 1) {
    if (numbers[index] > maiorNumbers) {
        maiorNumbers = numbers[index];
    }
}
console.log(maiorNumbers)