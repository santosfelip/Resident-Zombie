const express = require('express');

const Cliente = require('../models/Cliente');

const router = express.Router();

router.get('/clientes', async(req, res)=> {
    try {

        const clientes = await Cliente.find();
        return res.json(clientes);
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao buscar Clientes'});
    }
} );


module.exports = (app) => app.use('/api', router);
