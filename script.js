 $("#find-food").on("click", function (event) {
        event.preventDefault();
        // Here we grab the text from the input box
        var food = $("#food-input").val();
        // Here we construct our URL
        
        var queryURL = "https://api.edamam.com/search?q=" + food +
          "&app_id=44b11e80&app_key=37ff2a49a5f86602913a54d1f39187bf&to=12"
        // https://api.edamam.com/search?q=chicken&app_id=44b11e80&app_key=37ff2a49a5f86602913a54d1f39187bf
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function (response) {
          console.log(response);
          $("#food-view").html(JSON.stringify(response.hits[0].recipe.label) + "<br>" + (response.hits[1].recipe
            .label) + "<br>"  + response.hits[2].recipe.label) + "<br>"  + (response.hits[3].recipe.label) 
          img = response.hits[0].recipe.image;
          img1 = response.hits[1].recipe.image;
          img2 = response.hits[2].recipe.image;
          var imgdisplay = $("<img>").attr("src", img);
          var imgdisplay1 = $("<img>").attr("src", img1);
          var imgdisplay2 = $("<img>").attr("src", img2);

          $("#food-view").append(imgdisplay, response.hits[0].recipe.url, response.hits[0].recipe.ingredientlines)
          $("#food-view1").prepend(imgdisplay1, response.hits[1].recipe.url)
          $("#food-view2").prepend(imgdisplay2, response.hits[2].recipe.url)

          console.log(myarray)
          console.log(img)
          console.log(label)
          console.log(myarray[1])
        });
      });
    </script>
     <form id="weather-form">
      <label for="weather-input">Input zipcode</label>
      <input type="number" id="zipcode-input"><br>
      <input id="find-zipcode" type="submit" value="zipcode Search">
      </form>
      <div id="weather-view" class="weather-view"></div>
      <script type="text/javascript">
      $("#find-zipcode").on("click", function (event) {
        event.preventDefault();
        // Here we grab the text from the input box
        var zipcode = $("#zipcode-input").val();
        var queryURL = "http://openweathermap.org/data/2.5/weather?zip=" + zipcode + "&appid=b6907d289e10d714a6e88b30761fae22&key=d7dc075f987d485c5db4c6f55bda31d6"
       // http://openweathermap.org/data/2.5/weather?zip=&appid=b6907d289e10d714a6e88b30761fae22&key=d7dc075f987d485c5db4c6f55bda31d6
       // http://openweathermap.org/data/2.5/weather?zip=32141&appid=b6907d289e10d714a6e88b30761fae22&key=d7dc075f987d485c5db4c6f55bda31d6
       $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function (response) {
          console.log(response);
          $("#weather-view").html(JSON.stringify(response.main.temp)
        )})})
