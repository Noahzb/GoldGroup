  // This .on("click") function will trigger the AJAX Call
  $("#find-food").on("click", function(event) {
    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();
    // Here we grab the text from the input box
    var food = $("#food-input").val();
    // Here we construct our URL
    var queryURL = "https://api.edamam.com/search?q=" + food + "&app_id=44b11e80&app_key=37ff2a49a5f86602913a54d1f39187bf"
   
   // https://api.edamam.com/search?q=chicken&app_id=${44b11e80}&app_key=${37ff2a5f86602913a54d1f39187bf}
    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of movie-view
    // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#food-view").text(JSON.stringify(response));
    });
    // -----------------------------------------------------------------------
  });


    $("#find-food").on("click", function(event) {
    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();
    // Here we grab the text from the input box
    var city = $("#weather-input").val();
    // Here we construct our URL
    var queryURL = "api.openweathermap.org/data/2.5/weather?zip=" + city +  ",us&appid=b6d7dc075f987d485c5db4c6f55bda31d6"

   // https://api.edamam.com/search?q=chicken&app_id=${44b11e80}&app_key=${37ff2a5f86602913a54d1f39187bf}
    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of movie-view
    // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      //$("#food-view").text(JSON.stringify(response));
      console.log(response)
    });
    // -----------------------------------------------------------------------
  });