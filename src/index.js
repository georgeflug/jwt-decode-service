var express = require('express');
var config = require('config');

var app = express();

app.listen(config.port, () => {
 console.log(`Server running on port ${config.port}`);
});

app.get("/health", (req, res, next) => {
 res.json({ status: "up" });
});
