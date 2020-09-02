const express = require('express');

const People = require('../models/People');

const router = express.Router();

router.post('/register', async(req, res)=> {
    try {
        const people = await People.create(req.body);

        return res.send({ people });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'});
    }
} );

module.exports = (app) => app.use('/api', router);
