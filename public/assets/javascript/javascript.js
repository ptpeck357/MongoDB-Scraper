$(document).ready(function() {

	/*Showing "Confirm Delete" modal*/
    $("#delete").click(function(){

    	$("#myModal").modal('show');
    	
    });

    $(".deleteone").click(function(){

    	$("#deleteone").modal('show');

    });

    /*Button function to scrape*/
    $("#scrape").click(function(e){

    	e.preventDefault();

    	$.ajax({
		    type: "GET",
		    url: "/scrape",
		    // On a successful call, clear the #results section
		    success: function(response) {
		    	console.log(response);
		    	location.reload();
		    	// if (response > 0) {
		    		// $("#modaltext").append(response + " articles were returned" )
		    		// $("#returnamount").modal()
		    	// } 

		    	//  else {
		    		// $("#modaltext").html("No new articles were found")
		    		// $("#returnamount").modal()
		    	// }
		    	
		    }
		});
    });

    /*Saving a specific article*/
    $(".saveBtn").click(function(){

    	var selected = $(this);

    	$.ajax({
		    type: "GET",
		    url: "/saved/" + selected.attr("data-id"),
		    // On a successful call, clear the #results section
		    success: function(response) {
		    	$("#success").modal()
		    }
		});
    });

    /*view notes for the specific article*/
    $(".viewnote").click(function(){

    	var selected = $(this);

    	$("#notespot").html("");

    	$.ajax({
		    type: "GET",
		    url: "/note/" + selected.attr("data-id")
		}) 
		.done(function(data) {
			
		    $("#notetitle").html("Note for Article " + selected.attr("data-id"))

		    
		    // if (!data.note) {
		    // 	data.note = "No Notes Yet!"
		    // }

		    for (var i = 0; i < data.article.note.length; i++) {
		    	$("#notespot").append("<p class='card-text col-md-12' id='notetitle'>" + data.article.note[i].note + 
		    	"<span><button type='button' class='btn btn-danger' data-id='"+data.ArticleId+
		    	"' id='deletenote'>X</button></span></p>")
		    }
		    	
			$("#article-note-modal").modal();
		    $(".savenote").attr("data-id", data.ArticleId)
			

		});
    });

    /*Save note*/
    $(".savenote").click(function(e){

    	var selected = $(this);

    	var ArticleId = selected.attr("data-id");

    	var note = $("#new-note").val().trim();

    	if(note){

    		$.ajax({
			    type: "POST",
				url: "/save/note/" + ArticleId,
				data: {
					note: note
				}
			}).done(function(data) {
				
			    	$("#notespot").append("<p class='card-text col-md-12' id='notetitle' style='background-color: lightgray;'>" + data.note.note + 
			    	"<span><button type='button' class='btn btn-danger' data-id='"+ArticleId+
			    	"' id='deletenote'>X</button></span></p><br>");

				    $(".savenote").attr("data-id", ArticleId);
					$("#article-note-modal").modal();
					$("#new-note").val("");
			});
	    }; 
    });

    $(document).on("click", "#deletenote", function(){
    	// alert("it works")
    	var selected = $(this);
    	console.log(selected.attr("data-id"))
  //   	$.ajax({
		//     type: "GET",
		//     url: "/saved/" + selected.attr("data-id"),
		//     // On a successful call, clear the #results section
		//     success: function(response) {
		//     	$("#success").modal()
		//     }
		// });
    })

});

