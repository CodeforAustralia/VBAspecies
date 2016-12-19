// app.js
// Including dependencies
var https       = require('https');
var fs          = require('fs');
var express     = require('express');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var morgan      = require('morgan');
var app         = express();
var port        = process.env.PORT || 4443;
var cors    = require('cors');
var path = require('path');

var options = {
    cert: fs.readFileSync('/home/verofa/virtualenvs/ns/apiSpecies/.ssl/apiSpeciescert.pem'),
    key: fs.readFileSync('/home/verofa/virtualenvs/ns/apiSpecies/.ssl/apiSpecieskey.pem')
};

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
mongoose.connect('mongodb://localhost/species', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database' + res);
	}
});

// Configuring the app's listen port
//app.listen(port, function() {
  //console.log("Node server running on -> http://localhost:" + port);
//});
var server = https.createServer(options, app);
    server.listen(port, function(){
        console.log("server running at https://IP_ADDRESS:" + port)
    });
