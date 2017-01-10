//Load the request module
const request = require('request');
// making the request to Museums Victoria
exports.museumVicApiSearch = function(speciesReq, callback) {
    console.log(speciesReq);
    var options = {
        uri : 'http://collections.museumvictoria.com.au/api/search',
        qs : {
         recordType: 'species',
         taxon: speciesReq
        },
        method : 'GET',
        //timeout: 10000,
        //followRedirect: true,
        //maxRedirects: 10
    }; 
    var res = [];
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //res = body;
            let museumVicSpeciesJson = JSON.parse(body);
            var museumVicSpeciesKeys = Object.keys(museumVicSpeciesJson);
            if ( museumVicSpeciesKeys.length > 0 ) {
                var resultJsonFile = [];
                var resultJsonMediaFile = [];
                var resultJsonMediaFileFiltered = [];
                for (var i = 0; i < museumVicSpeciesKeys.length; i++) {
                  if (museumVicSpeciesJson[i].hasOwnProperty("recordType")) {
                    resultJsonFile.push({generalDescription: museumVicSpeciesJson[i].generalDescription, 
                                habitat: museumVicSpeciesJson[i].habitat,
                                nationalParks: museumVicSpeciesJson[i].nationalParks,
                                diet: museumVicSpeciesJson[i].diet,
                                briefId: museumVicSpeciesJson[i].briefId,
                                endemicity: museumVicSpeciesJson[i].endemicity
                              });
                    var resultJsonMedia = museumVicSpeciesJson[i].media;
                  };
                  var resultJsonMediaKeys = Object.keys(resultJsonMedia)
                  for (var j = 0; j < resultJsonMediaKeys.length; j++){
                      if ( resultJsonMedia[j].hasOwnProperty('alternativeText')){
                           console.log("jota");
                           console.log(j);
                           //console.log(resultJsonMedia[j]);
                           resultJsonMediaFile = resultJsonMediaFile.concat(resultJsonMedia[j]);
                      };
                  };
                  resultJsonMediaFileFiltered.push({media: resultJsonMediaFile})
                };

            };
            let finalSpeciesJson = [];
            if (typeof resultJsonFile != "undefined") {

                finalSpeciesJson = resultJsonFile.concat(resultJsonMediaFileFiltered);
            };
            res = finalSpeciesJson;
        }
        else {
            //res = 'Not Found';
            console.log('Invalid Status Code Returned:', response.statusCode);
            console.log('Error:', error);
        }
        callback(res);
    });
};