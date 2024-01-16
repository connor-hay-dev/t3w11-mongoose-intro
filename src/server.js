// server configuration

const express = require('express');

//m make a server instance

const app = express();

app.get("/", (request, response) => {
    response.json({
        message: "Hello World"
    });
});

module.exports = {
    app
}