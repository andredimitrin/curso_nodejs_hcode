const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Listando os usuarios');
})

router.get('/:id', (req, res) => {
    res.send(`Acessando a Usuário com o id: ${req.params.id}`);
})

module.exports = router;