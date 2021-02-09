const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');
const jwtDecode = require('jwt-decode');

const app = express();

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
    res.json({
        header,
        body,
        issuedAt: formatTime(body.iat),
        expiresAt: formatTime(body.exp),
    });
});

function formatTime(epochTime) {
    if (epochTime == null) {
        return null;
    }
    return new Date(epochTime * 1000);
}
