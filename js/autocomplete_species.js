    $( "#Species" ).autocomplete({
      source: function( request, response ) {
      	valor = $( "#Species" ).val();
        $.ajax( {
          url: "http://vbaspecies.herokuapp.com/species/search?q=" + valor,
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function( data ) {
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
          var specieWord = ui.item.value.replace(/ /g,"+");
          var promise = speciesExtraInfo(specieWord);
          //execution and access to the succes event
          promise.success(function(JsonRes){
            console.log('first query pages and second jsonres');
            $.each( JsonRes, function( key, value ) {
              $.each( value.media, function( keyx, valuex ) {
                if (typeof valuex.medium.uri != "undefined") {
                  ValidLinkSpecies = " <a target='_blank' href="+valuex.medium.uri+"> Museum Victoria Photo Reference </a>";
                  $("#log").prepend( "<p>" + "<b>Scientific Name: </b>" + ui.item.value.italics()  + "<br/><b>Common Name: </b>" + ui.item.label 
                    + "<br/><b>Taxon ID:</b> " + ui.item.taxon_id.fontcolor("green") + "<br/>" + ValidLinkSpecies+ "<br/>" + valuex.rightsStatement + "</p>");
                  console.log(ValidLinkSpecies);
                  } else {
                  ValidLinkSpecies = "";
                  $("#log").prepend( "<p>" + "<b>Scientific Name: </b>" + ui.item.value.italics()  + "<br/><b>Common Name: </b>" + ui.item.label 
                    + "<br/><b>Taxon ID:</b> " + ui.item.taxon_id.fontcolor("green") + "<br/>" + "There is no Museum Victoria Photo Reference Reference"+"</p>");
                  console.log(valuex.medium.uri);
                  } 
              });
            });
         });
      }
    });
