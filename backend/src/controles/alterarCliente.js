const express = require('express');

const Cliente = require('../models/Cliente');

const router = express.Router();

router.put('/:id', async(req, res)=> {
   const cliente = Cliente.updateOne({_id: req.params.id}, req.body, (err) =>{
    if(err) return res.status(400).json({
        error: true,
        message: "Error: Cliente não foi editado com sucesso!"
    });

    return res.json({
        error: false,
        message: "Cliente editado com sucesso!"
    });
   })
} );

module.exports = (app) => app.use('/api', router);
