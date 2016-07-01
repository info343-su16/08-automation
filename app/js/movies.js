'use strict';

//when the form is submitted
// $('form').submit(function(event) {

//    $('#movies').empty();

//    //get what the user typed in
//    var searchTerm = $('#movieTitle').val();
   
//    //construct the url to query
//    var url = 'http://www.omdbapi.com/?s='+searchTerm;
//    console.log('Sending request to '+url);

//    //send the AJAX request
//    var omdb = $.get(url);
//    var local = $.get('data/movies-2015.js');
//    $.when(omdb, local).then(function(data, localData){

//        var theMovies = data[0].Search; //array

//        //comment
//        var list = $('#movies').append('<ul>');

//        theMovies.forEach(function(movie){
//            list.append('<li><img src="'+
//                      movie.Poster+'"> '+
//                      movie.Title+' ('+movie.Year+')</li>');
//        });

//        console.log(localData[0]);

//    });



//    //don't submit form as usual
//    return false; //jQuery specific version of event.preventDefault()
// });


//have enter submit form (for convenience)
$('input').keypress(function(event) {
   if (event.keyCode == 13) { //if enter key pressed
      event.preventDefault(); //don't do normal work
      $('form').submit(); //submit the form
   }
});