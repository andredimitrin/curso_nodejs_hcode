console.log('Exibindo mensagem no console');

//erro

console.error(new Error('Mensagem de erro'));


const carros = ['Gol', 'Palio', 'Uno', 'Fusca', 'HB20'];

console.table(carros);

const dados = {
    nome: 'André',
    sobrenome: 'Dimitrin'
}

console.table(dados)

console.count('processo')
console.count('processo')
console.count('processo')

console.log('Resetando o processo');

console.countReset('processo')
console.count('processo')

console.time('Execução')

for(let i = 0; i < 100; i++){
    console.log('----')
}

console.timeEnd('Execução')

console.assert(10 > 5, '10 e maior que 5');

console.assert(10 < 5, '10 e menor que 5');

// console.clear()
//limpa tudo que etsá no console