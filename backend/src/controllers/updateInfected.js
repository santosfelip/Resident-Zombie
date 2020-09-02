const express = require('express');

const People = require('../models/People');

const router = express.Router();

router.post('/updateInfected', async(req, res)=> {
    try {
        const { _id } = req.body;
        const { infected } = req.body;
        const people = await People.findByIdAndUpdate(_id,
            {'$set': { infected : infected, update_at: Date.now()}});

        return res.send({ people });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'});
    }
} );

module.exports = (app) => app.use('/api', router);
