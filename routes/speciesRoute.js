var express       = require('express');
var routerApi    = express.Router();
var routerApiCtrl = require('../controllers/species.js');
var cors          = require('cors');

  //Link routes and functions
  routerApi.get('/species', cors(), function(req, res) {
	return routerApiCtrl.findSpecies(req, res);
  });

  routerApi.get('/species/search', cors(), function(req, res) {
	return routerApiCtrl.findSpeciesBy(req, res);
  });

  routerApi.get('/species/:id', cors(), function(req, res) {

	return routerApiCtrl.findSpeciesId(req, res);
  });

  module.exports = routerApi;