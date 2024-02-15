const express = require('express');
const router = express.Router();

function logReq(req,res,next){
    console.log('Requisição feita por função middleware');

    return next()
}

router.get('/', logReq,(req, res) => {
    res.send('Listando os usuarios');
})

router.get('/:id', (req, res) => {
    res.send(`Acessando a Usuário com o id: ${req.params.id}`);
})

module.exports = router;