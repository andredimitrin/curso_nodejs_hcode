const {EventEmitter} = require('events');

const emitter = new EventEmitter();

const validaObjeto = (a) => {

    if (typeof a !== 'object'){
        emitter.emit('error',new Error('O valor informado não é um objeto'));
    }else{
    console.log('Objeto Valido')
    }
}

emitter.addListener('error', (e) => {
    console.log(`Erro: ${e.message}`)
})

let dados ={name: 'André', sobrenome: 'Dimitrin'}

validaObjeto(dados)