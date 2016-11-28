//File: controllers/speciesNew.js
const express      = require('express');
const url          = require('url');
const SpeciesModel = require('../models/specie.js');
//const mongoose    = require('mongoose');
//cors    = require('cors'),

//Method GET - Return species in the DB
exports.findSpecies = function(req, res) {
      console.log('List of all species');
            SpeciesModel.find(function(err, species) {
                if(!err) {
                  res.send(species);
                  console.log(species);
                } else {
                  res.statusCode = 500;
                  console.log('Internal error(%d): %s',res.statusCode,err.message);
                  res.send({ error: 'Server Error'});
                }
            });
        };

//Method GET - Return species by Id
exports.findSpeciesId = function(req, res) {
	  console.log('List specie by ID');
      let specieId = req.params.id;
           var query = SpeciesModel.find({ TAXON_ID: specieId }).limit(20);
           query.exec(function(err, species) {
              if (!err) {
                  res.send(species, {'Content-Type': 'application/json'}, 200);
                  console.log(species);
              } else {
                  res.send(JSON.stringify(err), {'Content-Type': 'application/json'}, 404);
              }
            });
        };

//Method GET - Return species by specific search patron
exports.findSpeciesBy = function(req, res) {
    function getQuerySpecies(err, species){
                   query.exec(function(err, species) {
                      if (!err) {
                          res.send(species, {'Content-Type': 'application/json'}, 200);
                          console.log(species);
                      } else {
                          res.send(JSON.stringify(err), {'Content-Type': 'application/json'}, 404);
                      }
                   });
    };
    let scientificName = req.query.scientificName;
    let primaryDiscipline = req.query.primaryDiscipline;
    let commonName = req.query.commonName;
    let scientificNameSynonym = req.query.scientificNameSynonym;
    let searchAllSpecies = req.query.q;
    console.log(searchAllSpecies);
    console.log(req.query.search);
    if(scientificName != null && scientificName != ''){
       let regex = new RegExp(scientificName, 'i');
       console.log('regex' + regex);
       var query = SpeciesModel.find({ SCIENTIFIC_NAME: regex }).limit(20);
       //.sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
       getQuerySpecies(query);
    } 
    else if(primaryDiscipline != null && primaryDiscipline != ''){
       let regex = new RegExp(primaryDiscipline, 'i');
       console.log('regexPD' + regex);
       var query = SpeciesModel.find({ PRIMARY_DISCIPLINE: regex }).limit(20);
       getQuerySpecies(query);
    }
    // Searching by Common Name
    else if(commonName != null && commonName != ''){
       let regex = new RegExp(commonName, 'i');
       console.log('regex' + regex);
       var query = SpeciesModel.find({ COMMON_NAME: regex }).limit(20);
       getQuerySpecies(query);
    }
    // Searching by Scientific Name Synonym
    else if(scientificNameSynonym != null && scientificNameSynonym != ''){
       let regex = new RegExp(scientificNameSynonym, 'i');
       console.log('regex SNS ' + regex);
       var query = SpeciesModel.find({ SCIENTIFIC_NME_SYNONYM: regex }).limit(20);
       getQuerySpecies(query);
    }
    // Searching by all
    else if(searchAllSpecies != null && searchAllSpecies != ''){
       let regex = new RegExp(searchAllSpecies, 'i');
       console.log('regex SNS ' + regex);
       var query = SpeciesModel.find({ $or : [{SCIENTIFIC_NAME: regex}, {COMMON_NAME: regex}, {SCIENTIFIC_NME_SYNONYM: regex}, 
       	                             { TAXON_ID: regex }, { PRIMARY_DISCIPLINE: regex} ]}).limit(20);
       getQuerySpecies(query);
    }
};




