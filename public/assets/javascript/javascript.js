$(document).ready(function() {

	/*Showing "Confirm Delete" modal*/
    $("#delete").click(function(){

    	$("#myModal").modal('show');
    	
    });

    $(".deleteone").click(function(){

    	$("#deleteone").modal('show');

    });

    /*Button function to scrape*/
    $("#scrape").click(function(){

    	$.ajax({
		    type: "GET",
		    url: "/scrape",
		    // On a successful call, clear the #results section
		    success: function(response) {

		    	location.reload();
		    	// if (response) {
		    	// 	$("#modaltext").append("articles were returned")
		    	// 	$("#returnamount").modal()
		    	// } else {
		    	// 	$("#modaltext").html("No new articles were found")
		    	// 	$("#returnamount").modal()
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

    	// $("#article-note-modal").modal()
    	$.ajax({
		    type: "GET",
		    url: "/note/" + selected.attr("data-id")
		}) 
		.done(function(data) {
		    $("#notetitle").html("Note for Article " + selected.attr("data-id"))
			$("#article-note-modal").modal()
		});
    });

    /*Save note*/
    $(".savenote").click(function(){

    	var selected = $(this);

    	var note = $("#new-note").val();
    	console.log(selected.attr("data-id"))
   //  	if(note){

   //  		$.ajax({
			//     type: "POST",
			// 	url: "/save/note",
			// 	data: {
			// 		note: note
			// 	}
		 // })
		 // .done(function(data) {
		 //    $("#notetitle").html("Note for Article " + selected.attr("data-id"))
			// $("#article-note-modal").modal()
			// console.log(data)
		 //    });

	  //   } else {
	  //   	return
	  //   }

    });

    $("#deletenote").click(function(){
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

