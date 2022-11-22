const alunos = ['João', 'Fernanda', 'Paula'];

//para adicionar outro nome:
alunos.push('Thais');
// OU
alunos[4] = 'Fábio'

console.log(alunos);

// outro exemplo: 

const notas = [];

notas.push(7);
notas.push(2);
notas.push(8);
notas.push(3);
notas.push(4);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4] 

console.log(soma / notas.length)