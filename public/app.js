/**
 * Created by juancarlosnavarrete on 6/6/17.
 */

$.getJSON("/articles", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
        // Display the apropos information on the page
        $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
    }
});



$( document ).ready(function() {
    console.log( "ready!" );

});