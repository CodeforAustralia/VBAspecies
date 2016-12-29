//Load the request module
const request = require('request');
const fs = require('fs');

exports.museumVicApiSearch = function(speciesReq, res) {

  console.log('Hello species of museumvictoria');
  console.log('Species: ' + speciesReq);
  console.log(res);
  console.log(typeof res);

//Lets try to make a HTTPS GET request to modulus.io's website.
//All we did here to make HTTPS call is changed the `http` to `https` in URL.
//request('http://collections.museumvictoria.com.au/api/search?recordType=species&taxon=Phascolarctos+cinereus', function (error, response, body) {
request.get({
  uri: "http://collections.museumvictoria.com.au/api/search",
  qs : {
    recordType: 'species',
    taxon: speciesReq
  },
  method: "GET",
  headers: {
    'Accept': 'application/json',
    'Accept-Charset' : 'utf-8',
    'User-Agent' : 'my-test-client'
  },
  timeout: 10000,
  followRedirect: true,
  maxRedirects: 10
}, function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }

    //All is good. Print the body
    let museumVicSpeciesJson = JSON.parse(body);
    console.log(typeof museumVicSpeciesJson);
    var museumVicSpeciesKeys = Object.keys(museumVicSpeciesJson);
    console.log(museumVicSpeciesKeys);
    console.log(museumVicSpeciesKeys.length);
    if ( museumVicSpeciesKeys.length > 0 )
    {
      console.log('key is mayor than 0');
      console.log(museumVicSpeciesJson[0].hasOwnProperty('recordType'));
      var resultJsonFile = [];
      for (var i = 0; i < museumVicSpeciesKeys.length; i++) {
         if (museumVicSpeciesJson[i].hasOwnProperty("recordType")){

           resultJsonFile.push({generalDescription: museumVicSpeciesJson[i].generalDescription, habitat: museumVicSpeciesJson[i].habitat});
         };

        //console.log("generalDescription: " + museumVicSpeciesJson[i].generalDescription);
        //console.log("habitat: " + museumVicSpeciesJson[i].habitat);
        //console.log(typeof museumVicSpeciesJson[i].media);
      };
      console.log(JSON.stringify(resultJsonFile))

    };

    console.log(typeof body); // Show the HTML for the Modulus homepage.

});

};