var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose'); 

app.configure(function () {
  app.use(express.bodyParser()); //JSON parser
  app.use(express.methodOverride()); // HTTP PUT and DELETE support
  app.use(app.router); // Route management
});

app.get('/', function(req, res) {
  res.send("Hello Species of the World!");
});

routes = require('./routes/species')(app);

mongoose.connect('mongodb://localhost/species', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database' + res);
	}
});

server.listen(5555, function() {
  console.log("Node server running on http://localhost:5555");
});
