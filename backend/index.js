const express = require('express');
const app = express();
const route = require('./routes/routes');
const port = 8080;
const cors = require('cors');

app.use(express.json());

app.use(cors({origin: 'http://localhost:4200', credentials: true}));

app.use('/', route);

app.listen(port, () => 
    {console.log(`Example app listening at http://localhost:${port}`)}
);


// exportation de l'application
module.exports = app;