$("button").click( function	(){
	$get.JSON( "http://insightdb.dev.usfca.edu/", function(object){
		$.each(object, function(key, value) {
			$("ul").append("<li>"+value.title+"</li>");
			});

	});

});