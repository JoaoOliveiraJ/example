const express = require('express');
const app = express();

app.get("/",
    (req, res) => {
        res.sendFile(__dirname + "/public/main.html");
    });

app.get('/style.css',
    (req, res) => {
        res.type('text/css');
        res.sendFile('style.css', { root: __dirname + "/public/" });
    });

module.exports = app