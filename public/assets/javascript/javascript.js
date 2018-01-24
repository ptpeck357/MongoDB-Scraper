$(document).ready(function() {

        event.preventDefault();

        $("#display").html("");

		$.ajax({

		  url: url,

		  method: 'GET',

		}).done(function(result) {
		 
		}).fail(function(err) {

		  throw err;

		});

});