const express = require('express');

const People = require('../models/People');

const router = express.Router();

router.get('/report', async(req, res)=> {
    try {
        const allPeoples = await People.count();
        const infectedPeoples = await People.count({ infected: true });

        const porncentInfected = (infectedPeoples/allPeoples)*100;
        const porncent = 100 - porncentInfected;

        const response = [
            {
                name: "Porcent Infected",
                value: porncentInfected
            },
            {
                name: "Porcent NO Infected",
                value: porncent
            }
        ];

        return res.json(response);
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'});
    }
} );

module.exports = (app) => app.use('/api', router);
