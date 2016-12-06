        function speciesExtraInfo(speciesWordIn) 
        {
          return jQuery.ajax({
            //url: "https://en.wikipedia.org/w/api.php?action=query&format=json&titles="+WikiSpecieWordIn+"&callback=?",
            //url: "http://collections.museumvictoria.com.au/api/search?taxon="+speciesWordIn+"&recordType=species",
            url: "http://collections.museumvictoria.com.au/api/search?recordType=species&taxon="+speciesWordIn,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            error : function(jqXHR, textStatus, errorThrown) {
            },
            timeout: 120000,
            });
        };