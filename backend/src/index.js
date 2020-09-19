const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Controles
require('./controles/registro')(app);
require('./controles/getCliente')(app);
require('./controles/alterarCliente')(app);
require('./controles/deletarCliente')(app);

app.listen(3003);
