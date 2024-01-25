/*
template referenced:
https://developers.google.com/maps/documentation/javascript/examples/polyline-simple#maps_polyline_simple-html 
*/

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 0, lng: -180 },
    mapTypeId: "terrain",
  });
 
    const torontoToLondon = [
	// Toronto Pearson Airport
    { lat: 43.677, lng: -79.632 },
	// London Heathrow Airport
    { lat: 51.468, lng: -0.454 },
  ];
    const flightOne = new google.maps.Polyline({
    path: torontoToLondon,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  
    const londonToJoburg = [
	// London Heathrow Airport
    { lat: 51.468, lng: -0.454 },
	// Joburg Tambo Airport
	// i got detained here lol... it was my fault
    { lat: -26.136, lng: 28.241 },
  ];
    const flightTwo = new google.maps.Polyline({
    path: londonToJoburg,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  
    const joburgToMokopane = [
	// Joburg Tambo Airport
    { lat: -26.136, lng: 28.241 },
	// Pick'n'Pay
    { lat: -24.187, lng: 29.012 },

  ];
    const driveOne = new google.maps.Polyline({
    path: joburgToMokopane,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  
    const mokopaneToAskari = [
	// Pick'n'Pay
    { lat: -24.187, lng: 29.012 },
	// Pidwa Wilderness Reserve
    { lat: -24.064, lng: 30.559 },

  ];
    const driveTwo = new google.maps.Polyline({
    path: mokopaneToAskari,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightOne.setMap(map)
  flightTwo.setMap(map)
  driveOne.setMap(map)
  driveTwo.setMap(map)
  
   

/*
  const flightPlanCoordinates = [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  
  flightPath.setMap(map);
*/
}

window.initMap = initMap;