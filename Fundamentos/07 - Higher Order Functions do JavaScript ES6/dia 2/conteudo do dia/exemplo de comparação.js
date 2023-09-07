const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) { //// utilizando for.
    fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}

console.log(fullNames);

/////////////////////////////////////////////////////////

const persons2 = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames2 = persons.map((person) => `${person.firstName} ${person.lastName}`); /// utilizando map.

console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

////////////////////////////////////////////

const numbers = [1, 2, 3, 4, -5];

  const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number)); /// utilizando map.

  console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
  console.log(numbers); // [ 1, 2, 3, 4, -5 ]


////////////////////////////////////////////////////////////

const numbers2 = [1, 2, 3, 4, -5];

const negativeNumbers2 = [];
for (let index = 0; index < numbers.length; index += 1) { //////// utilizando for.
    if (numbers[index] > 0) {
      negativeNumbers.push(numbers[index] * -1);
    } else {
    negativeNumbers.push(numbers[index]);
    }
}

  console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
  console.log(numbers); // [ 1, 2, 3, 4, -5 ]

