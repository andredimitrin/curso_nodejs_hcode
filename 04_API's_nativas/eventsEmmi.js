const {EventEmitter} = require('events');


class Evento extends EventEmitter {}
const meuEvento = new Evento();


//subscriber - assinante
meuEvento.on('seguranca', (x,y) => {
    console.log(`Executando o evento seguranca: ${x} ${y}`);
})


//publisher - publicador
meuEvento.emit('seguranca', 'userAdmin','Alterou Salario')


meuEvento.on('encerrar', (dados) => {
    console.log(`Assinante: ${dados}`);
})

meuEvento.emit('encerrar', 'Sistema encerrado')