$(document).ready(function() {

	 $("#search").on("click", function(event) {

        event.preventDefault();

        $("#display").html("");

		var term = $("#searchterm").val();

		var number = $("#recordsretrieve").val();

		var start = $("#startyear").val();

		var end = $("#endyear").val();

		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

		url += '?' + $.param({

			'api-key': "04f9720c85bb46ebb11cf2bc5398f238",
			'q': term,
			'begin_date': start,
			'end_date': end,
		});

		$.ajax({

		  url: url,

		  method: 'GET',

		}).done(function(result) {

		  console.log(result);

		  for (var i = 0; i < number; i++) { 

		  	var showdiv = $("<div>")

		  	var headline = result.response.docs[i].headline.main;

		    var author = result.response.docs[i].byline.original;

		    var date = result.response.docs[i].pub_date;

		    var link = "<a id='link' href='" + result.response.docs[i].web_url + "'>" + "Webpage: " + result.response.docs[i].web_url + "</a>"

		    var p = $("<h3>").text(i+1 + ".   Headline: " + headline);

		    var p1 = $("<h4>").text(author);

		    var datediv = $("<h4>").text("Publish Date: " + date);

		    var linkdiv = $("<h4>").html(link)

		    p1.addClass("author")

		    p.addClass("headline")

		    showdiv.prepend(p);

		    p.append(p1);

		    p1.append(datediv);

		    p1.append(linkdiv);

		  	$("#display").append(showdiv);

		  }
		 
		}).fail(function(err) {

		  throw err;

		});
	
});

$("#clearbtn").on("click", function(event){

	$("#display").empty();

})

});