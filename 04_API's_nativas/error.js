// throw new Error('Ah, não! Deu erro? Ná minha maquina funciona, mas eu sou o erro!');


//tente executar alguma coisa

function execute() {
    executeTo()
}

function executeTo() {
    throw new Error('Deu erro na minha maquina');
}

function init() {

    try {
        execute()
    
    } catch (e) {
        console.log(`Erro: ${e.message}`)
        
    }
    
}

init()
console.log('Fim do programa');
