var express = require('express');
var parser = require('body-parser');
var app = express();

app.post ('/:id/:name', function(req, res) {
    res.send(req.params.id + ' ' + req.params.name);
});

app.listen(3000);