//File: routes/species.js
module.exports = function(app) {

  var SpeciesModel = require('../models/specie.js');

  //GET - Return all species in the DB
  findSpeciesModelBy = function(req, res, next) {
      var sn = req.param('SCIENTIFIC_NAME');
      var pd = req.param('PRIMARY_DISCIPLINE');
      var cn = req.param('COMMON_NAME');
      var ti = req.param('TAXON_ID');
      var ssn = req.param('SCIENTIFIC_NME_SYNONYM'); 
      console.log('GET /speciesP sn ' + sn + pd + cn + ti);
      
      //Autocomplete function by SCIENTIFIC_NME_SYNONYM
      if(sn != null){
           var regex = new RegExp(req.param('SCIENTIFIC_NAME'), 'i');
           console.log('regex' + regex);
           var query = SpeciesModel.find({ SCIENTIFIC_NAME: regex });
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
           var query = SpeciesModel.find({ PRIMARY_DISCIPLINE: regex });
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
        // Searching by Common Name
        else if(cn != null){
           var regex = new RegExp(req.param('COMMON_NAME'), 'i');
           console.log('regex' + regex);
           var query = SpeciesModel.find({ COMMON_NAME: regex });
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
        // Searching by Taxon ID
        else if(ti != null){
            var tii = parseInt(ti);
            SpeciesModel.find({ TAXON_ID: tii  }, function(err, species) {
                if(!err) {
                  res.send(species);
                  console.log(species);
                } else {
                  res.statusCode = 500;
                  console.log('Internal error(%d): %s',res.statusCode,err.message);
                  res.send({ error: 'Server Error'});
                }
          });
        }
        // Searching by Sinonym
        else if(ssn != null){
           var regex = new RegExp(req.param('SCIENTIFIC_NME_SYNONYM'), 'i');
           console.log('regex' + regex);
           var query = SpeciesModel.find({ SCIENTIFIC_NME_SYNONYM: regex });
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
      //Searching by All Species
      else
        {
          console.log('Saliendo de todos los if anteriores');
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
  app.get('/species', findSpeciesModelBy(req, res, next));
}
