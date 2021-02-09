var express = require('express');
var config = require('./config');
const bodyParser = require('body-parser');
const jwtDecode = require('jwt-decode');

var app = express();

app.use(bodyParser.json());

app.listen(config.port, () => {
 console.log(`Server running on port ${config.port}`);
});

app.get('/health', (req, res, next) => {
 res.json({ status: 'up' });
});

app.post('/jwt', (req, res, next) => {
    const jwt = req.body.token;
    const header = jwtDecode(jwt, { header: true });
    const body = jwtDecode(jwt);
    const result = {
        header,
        body,
    };
    res.json(result);
});
