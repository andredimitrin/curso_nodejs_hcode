require ('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const host = '127.0.0.1';
const port = 3000;


mongoose.connect(process.env.DATABASE_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error',(err)=> console.log(err));
db.once('open', ()=> console.log('Conectado ao MongoDB'));

app.use(express.json());

const subscribersRoutes = require('./routes/subscribers');
app.use('/subscribers', subscribersRoutes);






















app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
})