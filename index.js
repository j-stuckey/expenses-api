'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { PORT } = require('./config');

const app = express();

//logging middleware
app.use(morgan(process.env.NODE_ENV === 'production' ? 'common': 'dev'));

app.use(express.json());

app.get('/status', (req, res, next) => {
    res.send('<h1>Server up and running!</h1>');
});

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

function runServer(port = PORT){
    const server = app.listen(port, () => {
        console.info(`App listening on port ${server.address().port}`);
    })
        .on('error', err =>{
            console.error('Express failed to start');
            console.error(err);
        });
}

if (require.main === module) {
    runServer();
}

