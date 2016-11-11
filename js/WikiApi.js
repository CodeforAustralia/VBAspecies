        function fnWikiApi(WikiSpecieWordIn) 
        {
          return jQuery.ajax({
            url: "https://en.wikipedia.org/w/api.php?action=query&format=json&titles="+WikiSpecieWordIn+"&callback=?",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            error : function(jqXHR, textStatus, errorThrown) {
            },
            timeout: 120000,
            });
        };