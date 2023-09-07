const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparaResult = (arrayResult, arraySelected) => {
    if (arrayResult === arraySelected) { return 1 };
    if (arraySelected === 'N.A') { return 0 };
    return -0.5;
};

const points = (arrayResult,arraySelected,arrayfunção) => {
let contador = 0;
for (let index =0; index < arrayResult.length;  index +=1) {
    const arrayfunction = arrayfunção(arrayResult[index], arraySelected[index]);
    contador += arrayfunction;
}
return `Resultado final: ${contador} pontos!`
}
console.log(points(RIGHT_ANSWERS, STUDENT_ANSWERS, comparaResult));