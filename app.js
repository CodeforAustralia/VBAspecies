// app.js
// Including dependencies
const express     = require('express');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const morgan      = require('morgan');
const app         = express();
const port        = process.env.PORT || 8080;

app.use(bodyParser.json());         
app.use(morgan('dev')); //Console Logs request

app.get('/', function(req, res) {
  res.send("Hello species of the state of Victoria!");
});

routes = require('./routes/speciesRoute');
app.use('/', routes);

// MongoDB Connection 
mongoose.connect('mongodb://localhost/species', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database' + res);
	}
});

// Configuring the app's listen port
app.listen(port, function() {
  console.log("Node server running on -> http://localhost:" + port);
});
