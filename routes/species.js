//File: routes/species.js
var cors = require('cors');
module.exports = function(app) {

  var SpeciesModel = require('../models/specie.js');

  //GET - Return species in the DB
  findSpeciesModelBy = function(req, res) {
      var sn = req.param('SCIENTIFIC_NAME');
      var pd = req.param('PRIMARY_DISCIPLINE');
      var cn = req.param('COMMON_NAME');
      var ti = req.param('TAXON_ID');
      var all = req.param('ALL');
      var ssn = req.param('SCIENTIFIC_NME_SYNONYM'); 
      console.log('GET /species SCIENTIFIC_NAME:' + sn + ' PRIMARY_DISCIPLINE: ' + pd + ' COMMON_NAME: ' + cn + ' TAXON_ID: ' + ti + ' ALL: ' + all );
      
      //Autocomplete function by SCIENTIFIC_NME_SYNONYM
      if(sn != null){
           var regex = new RegExp(req.param('SCIENTIFIC_NAME'), 'i');
           console.log('regex' + regex);
           var query = SpeciesModel.find({ SCIENTIFIC_NAME: regex }).limit(20);
           //.sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
           query.exec(function(err, species) {
              if (!err) {
                  res.send(species, {'Content-Type': 'application/json'}, 200);
                  console.log(species);
              } else {
                  res.send(JSON.stringify(err), {'Content-Type': 'application/json'}, 404);
              }
          });
      }
        // Searching by Primary Discipline
        else if(pd != null){
           var regex = new RegExp(req.param('PRIMARY_DISCIPLINE'), 'i');
           console.log('regex' + regex);
           var query = SpeciesModel.find({ PRIMARY_DISCIPLINE: regex }).limit(20);
           query.exec(function(err, species) {
              if (!err) {
                  res.send(species, {'Content-Type': 'application/json'}, 200);
                  console.log(species);
              } else {
                  res.send(JSON.stringify(err), {'Content-Type': 'application/json'}, 404);
              }
          });
        }
        // Searching by Common Name
        else if(cn != null){
           var regex = new RegExp(req.param('COMMON_NAME'), 'i');
           console.log('regex' + regex);
           var query = SpeciesModel.find({ COMMON_NAME: regex }).limit(20);
           query.exec(function(err, species) {
              if (!err) {
                  res.send(species, {'Content-Type': 'application/json'}, 200);
                  console.log(species);
              } else {
                  res.send(JSON.stringify(err), {'Content-Type': 'application/json'}, 404);
              }
          });
        }
        // Searching by Taxon ID
        else if(ti != null){
           console.log('regex' + regex);
           var query = SpeciesModel.find({ TAXON_ID: ti }).limit(20);
           query.exec(function(err, species) {
              if (!err) {
                  res.send(species, {'Content-Type': 'application/json'}, 200);
                  console.log(species);
              } else {
                  res.send(JSON.stringify(err), {'Content-Type': 'application/json'}, 404);
              }
          });
        }
        // Searching by Synonym of species
        else if(ssn != null){
           var regex = new RegExp(req.param('SCIENTIFIC_NME_SYNONYM'), 'i');
           console.log('regex' + regex);
           var query = SpeciesModel.find({ SCIENTIFIC_NME_SYNONYM: regex }).limit(20);
           query.exec(function(err, species) {
              if (!err) {
                  res.send(species, {'Content-Type': 'application/json'}, 200);
                  console.log(species);
              } else {
                  res.send(JSON.stringify(err), {'Content-Type': 'application/json'}, 404);
              }
          });
        }
        // Searching in SCIENTIFIC_NAME, COMMON_NAME or SCIENTIFIC_NME_SYNONYM for autocomplete
        else if( all != null ){
           if (!all){ 
               res.send(JSON.stringify(err), {'Content-Type': 'application/json'}, 404);
           } else {
               var regex = new RegExp(req.param('ALL'), 'i');
               console.log('regex ALL' + regex);
               var query = SpeciesModel.find({ $or : [{SCIENTIFIC_NAME: regex}, {COMMON_NAME: regex}, {SCIENTIFIC_NME_SYNONYM: regex}, { TAXON_ID: regex } ]}).limit(20);
               query.exec(function(err, species) {
               if (!err) {
                  res.send(species, {'Content-Type': 'application/json'}, 200);
                  console.log(species);
               } else {
                  res.send(JSON.stringify(err), {'Content-Type': 'application/json'}, 404);
               }
               });
              }
        }
      //Searching by All Species
      else
        {
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
  };
  //Link routes and functions
  app.get('/species', cors(), findSpeciesModelBy);
}
