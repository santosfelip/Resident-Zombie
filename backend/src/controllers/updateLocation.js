const express = require('express');

const People = require('../models/People');

const router = express.Router();

router.post('/updateLocation', async(req, res)=> {
    try {
        const { _id } = req.body;
        const { Latitude } = req.body;
        const { Longitude } = req.body;
        const people = await People.findByIdAndUpdate(_id,
            {'$set': { Latitude: Latitude , Longitude: Longitude, update_at: Date.now()}});

        return res.send({ people });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'});
    }
} );

module.exports = (app) => app.use('/api', router);
