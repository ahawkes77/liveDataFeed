// var weekly_quakes_endpoint = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.geojson"


var map;

$(document).ready(function(){

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    zoom: 1.75
  });

})


function writeData(wording) {
  document.getElementById('demo').innerHTML += wording + "<br><br>";

}

