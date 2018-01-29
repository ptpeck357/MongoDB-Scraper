$(document).ready(function() {

	/*Showing "Confirm Delete" modal*/
    $("#delete").click(function(){

    	$("#myModal").modal('show')
    });

    $(".deleteone").click(function(){

    	$("#deleteone").modal('show')
    });

    /*Button function to scrape*/
    $("#scrape").click(function(){

    	$.ajax({
		    type: "GET",
		    url: "/scrape",
		    // On a successful call, clear the #results section
		    success: function(response) {
		    	console.log(response)
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
});

