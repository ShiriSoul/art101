// index.js - To experiment with jQuery and AJAX.
// Author: Tony Pau
// Date: May 31 2023

function getStuff() {
	console.log("Clicked!");
  $.ajax({
    url: "https://pokeapi.co/api/v2/location/66",
    type: "GET",
    data: {},
  })
  .done(function(data) {
 		// console.log(data);
    let area = (data.names[1].name);
    let region = (data.region.name);
    $("#output").html("We are in the region of " + region + " where " + area + " lies. ");
  })
}

$("button").click(getStuff);

