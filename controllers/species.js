//File: controllers/speciesNew.js
const express      = require('express');
const url          = require('url');
const SpeciesModel = require('../models/specie.js');
const cors    = require('cors');

// Query execution
function findSpeciesQuery(req, res)
{
   console.log('queries');
   req.exec(function(err, species) {
   if (!err) {
     res.send(JSON.stringify(species, null, ' '), {'Content-Type': 'application/json'}, 200);
     //res.send(species, {'Content-Type': 'application/json'}, 200);
     //res.send(species);
     console.log(species);
     } else {
       res.send(JSON.stringify(err), {'Content-Type': 'application/json'}, 404);
     }
   });
};

//Method GET - Return species in the DB
exports.findSpecies = function(req, res) {
      console.log('List of all species');
      urlQueryParts = url.parse(req.url, true);
      let apiPath = urlQueryParts.path;
      if (apiPath == '/species'){
           var query = SpeciesModel.find();
           return findSpeciesQuery(query, res);
        } else {
          res.status(404).json({ error: "Resource not found, please try with a correct resource o parameter value" });
        };
      };

//Method GET - Return species by Id
exports.findSpeciesId = function(req, res) {
	  console.log('List specie by ID');
      let specieId = req.params.id;
           var query = SpeciesModel.find({ TAXON_ID: specieId }).limit(20);
           return findSpeciesQuery(query, res);
};

//Method GET - Return species by specific search patron
exports.findSpeciesBy = function(req, res) {
    
    let scientificName = req.query.scientificName;
    let primaryDiscipline = req.query.primaryDiscipline;
    let commonName = req.query.commonName;
    let synonymName = req.query.synonymName;
    let searchAllSpecies = req.query.q;
    urlQueryParts = url.parse(req.url, true);
    let apiPath = urlQueryParts.pathname;
    if(scientificName != null && scientificName != ''){
       let regex = new RegExp(scientificName, 'i');
       var query = SpeciesModel.find({ SCIENTIFIC_NAME: regex }).limit(20);
       console.log(query);
       //.sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
       //getQuerySpecies(query);
       return findSpeciesQuery(query, res);
    } 
    else if(primaryDiscipline != null && primaryDiscipline != ''){
       let regex = new RegExp(primaryDiscipline, 'i');
       var query = SpeciesModel.find({ PRIMARY_DISCIPLINE: regex }).limit(20);
       return findSpeciesQuery(query, res);
    }
    // Searching by Common Name
    else if(commonName != null && commonName != ''){
       let regex = new RegExp(commonName, 'i');
       var query = SpeciesModel.find({ COMMON_NAME: regex }).limit(20);
       return findSpeciesQuery(query, res);
    }
    // Searching by Scientific Name Synonym
    else if(synonymName != null && synonymName != ''){
       let regex = new RegExp(synonymName, 'i');
       var query = SpeciesModel.find({ SCIENTIFIC_NME_SYNONYM: regex }).limit(20);
       return findSpeciesQuery(query, res);
    }
    // Searching by all fields
    else if(searchAllSpecies != null && searchAllSpecies != ''){
       let regex = new RegExp(searchAllSpecies, 'i');
       var query = SpeciesModel.find({ $or : [{SCIENTIFIC_NAME: regex}, {COMMON_NAME: regex}, {SCIENTIFIC_NME_SYNONYM: regex}, 
       	                             { TAXON_ID: regex }, { PRIMARY_DISCIPLINE: regex}, {ORIGIN: regex}, {TAXON_TYPE: regex},
                                     {COMMON_NME_SYNONYM: regex}, {FFG_ACT_STATUS: regex}, {EPBC_ACT_STATUS: regex}, {VIC_ADVISORY_STATUS: regex}
                                     ]}).limit(20);
       return findSpeciesQuery(query, res);
    }
    else{
        res.status(404).json({ error: "Resource not found, please try with a correct resource o parameter value" });
    };
};

