let buildGallery = function(){
    var url = "https://openlibrary.org/api/books?bibkeys=" + $("#number-images").val() + "&format=json&jscmd=data";
        	$.ajax({
        		url: url,
        		type: "GET",
        		dataType: "json",
        		success: function(data){
        		    var bN = data["title"];
        		    $("#title").html(bN);
        		},
        		error: function(err){
        			console.log(err);
        		}
        	});
}

// https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data