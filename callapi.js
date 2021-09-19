$(document).ready(function() {

	var settings = {
	  "url": "https://front-end-test-api.herokuapp.com",
	  "method": "GET",
	  "timeout": 0,
	  "headers": {
	     "Content-Type": "application/x-www-form-urlencoded"
	  }
	};

	$.ajax(settings).done(function (response) {
		console.log(JSON.parse(response))
	    $('#data').DataTable({
         	data:JSON.parse(response),
         	dataSrc:"rows",
         	columnDefs: [{
    			"defaultContent": "",
    			"targets": "_all"
  			}],
          	columns: [ 
          		{ "data": "abv" },
    			{ "data": "address" },
    			{ "data": "category" },
    			{ "data": "city" },
    			{ "data": "coordinates" },
    			{ "data": "country" },
    			{ "data": "description" },
    			{ "data": "ibu" },
    			{ "data": "name" },
    			{ "data": "state" },
    			{ "data": "website" }    			
        	]
    	});

	});



} );

