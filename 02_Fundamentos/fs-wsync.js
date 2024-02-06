const fs = require('fs');

console.log((process.hrtime()[0] / 60).toFixed(5));
console.log("Executando o console antes de ler o arquivo");

const dados = fs.readFileSync('file.txt', (err, data) => {
    if (err) throw err;
    console.log("Terminei a leitura de File.txt");
});


console.log("Executando o console depois de ler o arquivo");
console.log((process.hrtime()[0] / 60).toFixed(5));