    $( "#Species" ).autocomplete({
      source: function( request, response ) {
      	console.log(request);
      	valor = $( "#Species" ).val();
      	console.log(valor);
        $.ajax( {
          //url: "http://54.206.104.145:8080/species?ALL=" + valor,
          url: "https://localhost:4443/species/search?q=" + valor,
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function( data ) {
            console.log(data);
            response($.map(data, function(v,i){
             return {
                label: v.COMMON_NAME + " - " + v.SCIENTIFIC_NAME,
                value: v.SCIENTIFIC_NAME ,
                //extend values
                taxon_id: v.TAXON_ID
             };
            }));
          },
          error : function(jqXHR, textStatus, errorThrown) {
          	console.log("Error getting Species Information");
          }
        });
      },
      minLength: 1,
      select: function( event, ui ) {
          console.log(ui.item.value);
          var specieWord = ui.item.value.replace(/ /g,"+");
          var promise = speciesExtraInfo(specieWord);
          //execution and access to the succes event
          promise.success(function(JsonRes){
            console.log('first query pages and second jsonres');
            //console.log(JsonRes.query.pages);
            console.log(JsonRes);
            //console.log(JsonRes[0].media.medium.uri);
            console.log(JsonRes.animalSubType);
            $.each( JsonRes, function( key, value ) {
              console.log( key);
              console.log( value);
              console.log( value.media);
              $.each( value.media, function( keyx, valuex ) {
                console.log( keyx);
                console.log( valuex);
                console.log( valuex.medium);
                console.log( valuex.medium.uri);
                console.log( valuex.rightsStatement);

                if (typeof valuex.medium.uri != "undefined") {
                //  //ValidLinkSpecies = " <a target='_blank' href="+WikiLinkPattern+pages.pageid+"> Wikipedia Reference </a>";
                  ValidLinkSpecies = " <a target='_blank' href="+valuex.medium.uri+"> Museum Victoria Photo Reference </a>";
                  $("#log").prepend( "<p>" + "<b>Scientific Name: </b>" + ui.item.value.italics()  + "<br/><b>Common Name: </b>" + ui.item.label 
                    + "<br/><b>Taxon ID:</b> " + ui.item.taxon_id.fontcolor("green") + "<br/>" + ValidLinkSpecies+ "<br/>" + valuex.rightsStatement + "</p>");
                  console.log(ValidLinkSpecies);
                  } else {
                  ValidLinkSpecies = "";
                  $("#log").prepend( "<p>" + "<b>Scientific Name: </b>" + ui.item.value.italics()  + "<br/><b>Common Name: </b>" + ui.item.label 
                    + "<br/><b>Taxon ID:</b> " + ui.item.taxon_id.fontcolor("green") + "<br/>" + "There is no Wikipedia Reference"+"</p>");
                  console.log(valuex.medium.uri);
                  } 





              });
              //if (typeof media.uri != "undefined") {
                //  //ValidLinkSpecies = " <a target='_blank' href="+WikiLinkPattern+pages.pageid+"> Wikipedia Reference </a>";
              //    ValidLinkSpecies = " <a target='_blank' href="+medium.uri+"> Wikipedia Reference </a>";
              //    $("#log").prepend( "<p>" + "<b>Scientific Name: </b>" + ui.item.value.italics()  + "<br/><b>Common Name: </b>" + ui.item.label 
              //    	+ "<br/><b>Taxon ID:</b> " + ui.item.taxon_id.fontcolor("green") + "<br/>" + ValidLinkSpecies+"</p>");
              //    console.log(ValidLinkSpecies);
              //    } else {
              //    ValidLinkSpecies = "";
              //    $("#log").prepend( "<p>" + "<b>Scientific Name: </b>" + ui.item.value.italics()  + "<br/><b>Common Name: </b>" + ui.item.label 
              //    	+ "<br/><b>Taxon ID:</b> " + ui.item.taxon_id.fontcolor("green") + "<br/>" + "There is no Wikipedia Reference"+"</p>");
              //    console.log(medium.uri);
              //    }
            });
         });
      }
    });
