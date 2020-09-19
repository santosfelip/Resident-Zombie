const express = require('express');

const Cliente = require('../models/Cliente');

const router = express.Router();

router.delete('/:id', (req, res)=> {
    const cliente = Cliente.deleteOne({_id: req.params.id}, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Cliente não foi apagado com sucesso!"
        });

        return res.json({
            error: false,
            message: "Cliente apagado com sucesso!"
        });
    })
} );


module.exports = (app) => app.use('/api', router);
