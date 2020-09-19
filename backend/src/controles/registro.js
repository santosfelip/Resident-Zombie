const express = require('express');

const Cliente = require('../models/Cliente');

const router = express.Router();

router.post('/registro', async(req, res)=> {
    try {
        const cliente = await Cliente.create(req.body);

        return res.send({ cliente });
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao Registrar o cliente'});
    }
} );

module.exports = (app) => app.use('/api', router);
