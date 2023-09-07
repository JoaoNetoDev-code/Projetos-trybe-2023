const students = [
{
    firstName: 'João',
    lastName: 'Silva',
    age: 14,
    period: 'Manhã',
    subjects: [
    { name: 'Matemática', grade: 67 },
    { name: 'Português', grade: 79 },
    { name: 'Química', grade: 70 },
    { name: 'Biologia', grade: 65 },
    ],
},
{
    firstName: 'Mario',
    lastName: 'Ferreira',
    age: 15,
    period: 'Tarde',
    subjects: [
    { name: 'Matemática', grade: '59' },
    { name: 'Português', grade: '80' },
    { name: 'Química', grade: '78' },
    { name: 'Biologia', grade: '92' },
    ],
},
{
    firstName: 'Jorge',
    lastName: 'Santos',
    age: 15,
    period: 'Manhã',
    subjects: [
    { name: 'Matemática', grade: '76' },
    { name: 'Português', grade: '90' },
    { name: 'Química', grade: '70' },
    { name: 'Biologia', grade: '80' },
    ],
},
{
    firstName: 'Maria',
    lastName: 'Silveira',
    age: 14,
    period: 'Manhã',
    subjects: [
    { name: 'Matemática', grade: '91' },
    { name: 'Português', grade: '85' },
    { name: 'Química', grade: '92' },
    { name: 'Biologia', grade: '90' },
    ],
},
{
    firstName: 'Natalia',
    lastName: 'Castro',
    age: 14,
    period: 'Manhã',
    subjects: [
    { name: 'Matemática', grade: '70' },
    { name: 'Português', grade: '70' },
    { name: 'Química', grade: '60' },
    { name: 'Biologia', grade: '50' },
    ],
},
{
    firstName: 'Wilson',
    lastName: 'Martins',
    age: 14,
    period: 'Manhã',
    subjects: [
    { name: 'Matemática', grade: '80' },
    { name: 'Português', grade: '82' },
    { name: 'Química', grade: '79' },
    { name: 'Biologia', grade: '75' },
    ],
},
];

const listaDealunos = (array) => {  //// feito com foreach.
    const alunos = [];
    array.forEach((estudant) => {
        if (estudant.period === 'Manhã') {
            alunos.push({aluno:`${estudant.firstName} ${estudant.lastName}`});
        };
    });
    return alunos;
}

const estudantesDaManha = (array) => { //// feito com for.
    const estudaDeManha = [];
    for (let index = 0; index < array.length; index += 1) {
        if ( array[index].period === 'Manhã' ) {
            estudaDeManha.push({alunos:`${array[index].firstName} ${array[index].lastName}`});
        }
    };
    return estudaDeManha;
};

const allNameStudents = students.filter((student) => ( //// nao foi eu que fiz esse é um exemplo feito.
    student.period === 'Manhã')).map((student) => `${student.firstName} ${student.lastName}`);

    console.log(allNameStudents);