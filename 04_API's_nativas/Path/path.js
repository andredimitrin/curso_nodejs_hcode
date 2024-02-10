const path = require('path');

console.log(path.basename(__filename));
console.log(path.normalize(__dirname));
console.log(path.join(__dirname, 'arquivo.txt'));
console.log(path.resolve('path.js'));
console.log(path.extname('path.js'));