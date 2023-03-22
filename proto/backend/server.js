var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', (request, response)=> {
    response.send('Hello World!');
})

app.listen(port);