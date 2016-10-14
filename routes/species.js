//File: routes/species.js
module.exports = function(app) {

  var SpeciesModel = require('../models/specie.js');

  //GET - Return all species in the DB
  findAllSpeciesModel = function(req, res) {
  	SpeciesModel.find(function(err, species) {
  		if(!err) {
        console.log('GET /species' + SpeciesModel.taxon_id)
  			res.send(species);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };


  //Link routes and functions
  app.get('/species', findAllSpeciesModel);

}
