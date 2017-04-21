var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello World');
});

app.get('/redirecionar', function(request, response){
    response.redirect(301, '/');
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});