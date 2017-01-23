const express       = require('express');
const routerApi    = express.Router();
const routerApiCtrl = require('../controllers/species.js');
const cors          = require('cors');

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