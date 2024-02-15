const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/upload', upload.single('arquivo'), (req, res,next) => {
    const file = req.file
    if (!file) {
        const error = new Error('Por favor, envie um arquivo')
        error.httpStatusCode = 400
        return next(error)
    }

    res.send(`Arquivo ${file.originalname} enviado com sucesso!`)
})


app.listen(3000, '127.0.0.1', () => {
    console.log('Servidor iniciado na porta 3000');
})