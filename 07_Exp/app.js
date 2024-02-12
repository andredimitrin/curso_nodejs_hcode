const express = require('express');
const app = express();
const port = 3000;
const host = '127.0.0.1';
const adminRoutes = require('./routes/admin');
const usuarioRoutes = require('./routes/usuario');

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Bem vindo a minha aplicação');
})

app.use('/admin', adminRoutes);
app.use('/usuario', usuarioRoutes);

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
})