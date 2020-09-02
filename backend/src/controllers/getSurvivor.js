const express = require('express');

const People = require('../models/People');

const router = express.Router();

router.get('/people', async(req, res)=> {
    try {

        const peoples = await People.find();
        return res.json(peoples);
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'});
    }
} );


module.exports = (app) => app.use('/api', router);
