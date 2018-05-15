$("button").on("click", function () {
    // Record every search input
var searchTerm = $("#searchTerm").val();
console.log(searchTerm);
// Create a button and print 'search term' text on it
var button = $("<button>").html(searchTerm);
// Add a button for every search input
$("#tags-appear-here").append(button);

var q=searchTerm;
var queryURL="https://api.giphy.com/v1/gifs/search?api_key=pRo4KGVeAcxTtT4xp7EE4TdGvYBcx0DX&q="+q+"&limit=10&offset=0&rating=G&lang=en";
console.log(queryURL);
$.ajax({
    url:queryURL,
    method: 'GET',
}).then(function(response){
    console.log(response);
    var link=response.data;

    for (var i=0;i<link.length;i++){
       var newGif= $("<img>");
       newGif.attr("id","gif");
       var imageURL=link[i].url;
       console.log(imageURL);
       newGif.attr("src",imageURL);
       $("#gifs-appear-here").prepend(newGif);
       
    }
    
 

})


})