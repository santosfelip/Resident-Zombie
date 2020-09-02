const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Controllers
require('./controllers/register')(app);
require('./controllers/getSurvivor')(app);
require('./controllers/reports')(app);
require('./controllers/updateLocation')(app);
require('./controllers/updateInfected')(app);

app.listen(3003);
