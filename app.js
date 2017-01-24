// app.js
// Including dependencies
const https       = require('https');
const fs          = require('fs');
const express     = require('express');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const morgan      = require('morgan');
const app         = express();
const port        = process.env.PORT || 4443;
const cors    = require('cors');
const path = require('path');
const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost/species';
               
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies         
app.use(morgan('dev')); //Console Logs request

app.get('/', function(req, res) {
  //res.send("Hello species of the state of Victoria!");
  res.sendFile(path.join(__dirname + '/index.html'));
});

routes = require('./routes/speciesRoute');
app.use('/', routes);
app.use('/public', express.static(path.join(__dirname, 'public'))); 
app.use('/js', express.static(path.join(__dirname, 'js')));
// MongoDB Connection 
mongoose.Promise = global.Promise;
mongoose.connect(mongoURL, function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database: ' + mongoURL);
	}
});

// Configuring the app's listen port
app.listen(port, function() {
  console.log("Node server running on -> http://localhost:" + port);
});
