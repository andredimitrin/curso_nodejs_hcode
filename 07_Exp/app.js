const express = require('express');
const app = express();
const port = 3000;
const host = '127.0.0.1';
const adminRoutes = require('./routes/admin');
const usuarioRoutes = require('./routes/usuario');
const cookieParser = require('cookie-parser');

app.use(express.static('public'));

app.use(express.json())
app.use(cookieParser()) 


app.use((req, res, next) => {
    console.log('Autenticando...');
   return next();
})

app.get('/setcookie', (req, res) => {
    res.cookie('user', 'Andre Dimitrin',{maxAge:900000, httpOnly: true});
    return res.send('Cookie criado');
})

app.get('/getcookie', (req, res) => {
    let user = req.cookies['user'];
    if(user){
        return res.send(user);
    }

})

app.get('/', (req, res) => {
    res.send('Bem vindo a minha aplicação');
})

app.use('/admin', adminRoutes);
app.use('/usuario', usuarioRoutes);

app.get('*', (req, res, next) => {
    setImmediate(() => {
        next(new Error('Temos um problema!'))
    })
})

app.use((err,req, res, next) => {
    console.log('Geramos um erro, veja as instruçãos para corrigir!');
    res.status(500).json({message: err.message})
})

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
})