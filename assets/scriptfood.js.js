$("#find-food").on("click", function (event) {
  event.preventDefault();
  // Here we grab the text from the input box
  var food = $("#food-input").val();
  // Here we construct our URL
  var queryURL = "https://api.edamam.com/search?q=" + food +
    "&app_id=44b11e80&app_key=37ff2a49a5f86602913a54d1f39187bf&to=10"
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
