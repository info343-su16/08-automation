'use strict';

//Add a document-ready event handler so that your script 
//will apply to the loaded DOM
$(document).ready(function(){

//Inside that event callback,

  //Assign a click listener so that the radius of the circle
  //increases by 10% pixels every time it is clicked.
  //  HINT: see the `.attr()` method
  $('circle').click(function() {
    var radius = $(this).attr('r');
    $(this).attr('r', radius*1.10);
  });


  //Select all 'removable' elements, and for each assign a 
  //click event listener which removes the clicked element
  //  HINT: see the `.remove()` method
  //  EXTRA: have them animate away (either fadeOut or slideUp)

  var removeButton = function() {
    //$(this).remove();
    $(this).fadeOut();
  };

  // var msg = "hello";
  // console.log(msg);

  $('.removable').click(removeButton);


  //Add functionality so that the 'add' button adds an extra
  //"Remove me!" button. These buttons should appear ABOVE
  //the 'add' button
  //  CHALLENGE: make these new buttons also be removable!
  //             Reuse your functions so you don't duplicate
  //             code!

  $('#add').click(function() {
    var button = $('<p><button class="removable">Remove me!</button></p>');
    button.click(removeButton);

    $('#add').before(button);

  });


});