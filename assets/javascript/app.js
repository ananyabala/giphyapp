/*
Things left to do: 
1. When there is nothing in the search panel, do not create a new button
2. Still image vs Working Gif
3. Pre-existing tags should be working

*/

function apiCall() {


        var button = $("<button>").html(searchTerm);
        console.log(button);

        // Add a button for every search input
        $("#tags-appear-here").append(button);

        var q = searchTerm;
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=pRo4KGVeAcxTtT4xp7EE4TdGvYBcx0DX&q=" + q + "&limit=10&offset=0&rating=G&lang=en";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: 'GET',
        }).then(function (response) {
            console.log(response);
            var link = response.data;

            for (var i = 0; i < link.length; i++) {
                var newGif = $("<img>");
                newGif.attr("id", "gif");
                var imageURL = link[i].images.fixed_height.url;
                console.log(imageURL);
                newGif.attr("src", imageURL);
                $("#gifs-appear-here").prepend(newGif);

            };



        });

    };


$("#submitbutton").on("click", function () {
    // Record every search input
    var searchTerm = $("#searchTerm").val();
    console.log(searchTerm);

    // If search bar is empty, don't run the function
    if ($(this).find('searchTerm').val() == '') {
        event.preventDefault();
    }
    // Otherwise run the whole function
    else {
        apiCall();
    }



});

$("#wookie").on("click",function wookieFunction(){
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=pRo4KGVeAcxTtT4xp7EE4TdGvYBcx0DX&q=Chewbacca&limit=10&offset=0&rating=G&lang=en";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function (response) {
        console.log(response);
        var link = response.data;

        for (var i = 0; i < link.length; i++) {
            var newGif = $("<img>");
            newGif.attr("id", "gif");
            var imageURL = link[i].images.fixed_height.url;
            console.log(imageURL);
            newGif.attr("src", imageURL);
            $("#gifs-appear-here").prepend(newGif);

        };



    });
    
})

$("#han").on("click",function soloFunction(){
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=pRo4KGVeAcxTtT4xp7EE4TdGvYBcx0DX&q="+encodeURI("Han Solo")+"&limit=10&offset=0&rating=G&lang=en";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function (response) {
        console.log(response);
        var link = response.data;

        for (var i = 0; i < link.length; i++) {
            var newGif = $("<img>");
            newGif.attr("id", "gif");
            var imageURL = link[i].images.fixed_height.url;
            console.log(imageURL);
            newGif.attr("src", imageURL);
            $("#gifs-appear-here").prepend(newGif);

        };



    });
    
})






