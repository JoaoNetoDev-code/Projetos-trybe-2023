// Fonte: <https://restcountries.com/v2/all>
const countries = [
{
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 65223
},
{
    name: 'Åland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580
},
{
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748
},
{
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741
},
{
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
},
{
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468
},
{
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700
},
{
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91
}
];

const populaçãototal = () => {
    const allPeaplo = countries.reduce((acc, curr) => acc + curr.population, 0);
    return allPeaplo;
}
populaçãototal();

const areaTotal = () => {
    const paisesArea = countries.reduce((acc, curr) => acc + curr.area, 0);
    return paisesArea;
}
areaTotal();

const longestName = () => {
    const maiorString = countries.reduce((acc, curr) => acc.name.length > curr.name.length ? acc : acc = curr);
    return maiorString;
}
longestName();

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];
const expectedResult = 20;
const unicaString = names.join('').toLowerCase().split('');
const countA = () => {
    return unicaString.reduce((acc, curr) => curr === 'a' ? acc + 1 : acc, contador = 0)
}
countA();


// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expectedResult2 = [
 { name: 'Pedro Henrique', average: 7.8 },
 { name: 'Miguel', average: 9.2 },
 { name: 'Maria Clara', average: 8.8 },
];

const studentAverage = () => {
    const estudante = students.map((aluno, index) => (
        {
            name: aluno,
            average:grades[index].reduce((acc, curr) => acc + curr)/grades[index].length
        }
    )
    );
    return estudante;
    
}
console.log(studentAverage())