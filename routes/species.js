//File: routes/species.js
module.exports = function(app) {

  var SpeciesModel = require('../models/specie.js');

  //GET - Return all species in the DB
  findSpeciesModelBy = function(req, res) {
      var sn = req.param('SCIENTIFIC_NAME');
      var pd = req.param('PRIMARY_DISCIPLINE');
      var cn = req.param('COMMON_NAME');
      var ti = req.param('TAXON_ID');
      console.log('GET /speciesP sn ' + sn + pd + cn + ti);
      if(sn != null){
          SpeciesModel.find({ SCIENTIFIC_NAME: sn  }, function(err, species) {
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
        // Searching by Primary Discipline
        else if(pd != null){
            SpeciesModel.find({ PRIMARY_DISCIPLINE: pd  }, function(err, species) {
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
        // Searching by Common Name
        else if(cn != null){
            SpeciesModel.find({ COMMON_NAME: cn  }, function(err, species) {
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
  app.get('/species', findSpeciesModelBy);
}
