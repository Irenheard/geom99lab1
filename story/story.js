/*
template referenced:
https://developers.google.com/maps/documentation/javascript/examples/polyline-simple#maps_polyline_simple-html 
*/

function initMap() {
	// location variables
	// toronto pearson airport
	const toronto = { lat: 43.677, lng: -79.632 };
	//london heathrow airport
	const london = { lat: 51.468, lng: -0.454 };
	// joburg tambo airport... i got detained here lol
	const joburg = { lat: -26.136, lng: 28.241 };
	// Pick'n'Pay... neat little grocery/liquor store
	const mokopane = { lat: -24.187, lng: 29.012 };
	// Pidwa wilderness reserve!!!
	const askari = { lat: -24.064, lng: 30.559 };
	
	const map = new google.maps.Map(document.getElementById("map"), {
	zoom: 3,
	center: { lat: 15.608, lng: -19.072 },
	mapTypeId: "satellite",
	});
 
    const torontoToLondon = [
    toronto,
    london,
  ];
    const flightOne = new google.maps.Polyline({
    path: torontoToLondon,
    geodesic: true,
    strokeColor: "#00ccff",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  
    const londonToJoburg = [
    london,
    joburg,
  ];
    const flightTwo = new google.maps.Polyline({
    path: londonToJoburg,
    geodesic: true,
    strokeColor: "#00ccff",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  
    const joburgToMokopane = [
    joburg,
    mokopane,
  ];
    const driveOne = new google.maps.Polyline({
    path: joburgToMokopane,
    geodesic: true,
    strokeColor: "#ce7e00",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  
    const mokopaneToAskari = [
    mokopane,
    askari,
  ];
    const driveTwo = new google.maps.Polyline({
    path: mokopaneToAskari,
    geodesic: true,
    strokeColor: "#ce7e00",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

	flightOne.setMap(map)
	flightTwo.setMap(map)
	driveOne.setMap(map)
	driveTwo.setMap(map)
}

window.initMap = initMap;
