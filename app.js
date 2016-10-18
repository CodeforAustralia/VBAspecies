// app.js

// Including dependencies
var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose'),
    cors = require('cors'),
    port     = process.env.PORT || 8080; 

// Configuring the app to be able to work with REST method
app.configure(function () {
  app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
  app.use(express.bodyParser()); //JSON parser
  app.use(express.methodOverride()); // HTTP PUT and DELETE support
  app.use(app.router); // Route management
  app.use(cors());
});

app.get('/', function(req, res) {
  res.send("Hello Species of the World!");
});

routes = require('./routes/species')(app);

// Conection DB 
mongoose.connect('mongodb://localhost/species', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database' + res);
	}
});

// Configuring the app's listen port
server.listen(port, function() {
  console.log("Node server running on -> http://localhost:" + port);
});
