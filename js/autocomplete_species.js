    $( "#Species" ).autocomplete({
      source: function( request, response ) {
      	console.log(request);
      	valor = $( "#Species" ).val();
      	console.log(valor);
        $.ajax( {
          //url: "http://54.206.104.145:8080/species?ALL=" + valor,
          url: "http://localhost:8080/species?ALL=" + valor,
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
          var WikiLinkPattern = "https://en.wikipedia.org/?curid=";
          var WikiSpecieWord = ui.item.value.replace(/ /g,"_");
          var promise = fnWikiApi(WikiSpecieWord);
          //execution and access to the succes event
          promise.success(function(JsonRes){
            $.each( JsonRes.query.pages, function( i, pages ) {
              if (typeof pages.pageid != "undefined") {
                  ValidLinkSpecies = " <a target='_blank' href="+WikiLinkPattern+pages.pageid+"> Wikipedia Reference </a>";
                  $("#log").prepend( "<p>" + "<b>Scientific Name: </b>" + ui.item.value.italics()  + "<br/><b>Common Name: </b>" + ui.item.label 
                  	+ "<br/><b>Taxon ID:</b> " + ui.item.taxon_id.fontcolor("green") + "<br/>" + ValidLinkSpecies+"</p>");
                  console.log(ValidLinkSpecies);
                  } else {
                  ValidLinkSpecies = "";
                  $("#log").prepend( "<p>" + "<b>Scientific Name: </b>" + ui.item.value.italics()  + "<br/><b>Common Name: </b>" + ui.item.label 
                  	+ "<br/><b>Taxon ID:</b> " + ui.item.taxon_id.fontcolor("green") + "<br/>" + "There is no Wikipedia Reference"+"</p>");
                  console.log(pages.pageid);
                  }
            });
         });
      }
    });
