const { promisify } = require('util');

const writeFile = promisify(require('fs').writeFile);
const conteudo = 'Arquivo criado com promisify';

writeFile('utilArquivo.txt', conteudo).then(() => {
    console.log('Arquivo criado com sucesso!');
}).catch((err) => {
    console.log(`Deu ruim: ${err}`);
})