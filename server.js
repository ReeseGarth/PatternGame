'use strict'

var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

// make 'app' default route
app.get('/', function(req, res) {
	res.redirect('/public');
});

app.listen(3000);