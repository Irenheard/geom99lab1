function initMap() {
	
/*
template for the polyline referenced:
https://developers.google.com/maps/documentation/javascript/examples/polyline-simple#maps_polyline_simple-html 
*/

	/* location variables*/
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
	
	/*Icon variables*/
	//airport icon
	const airport = "https://raw.githubusercontent.com/Irenheard/geom99lab1/main/story/airport.png";
	//shopping Icon
	const shop = "https://raw.githubusercontent.com/Irenheard/geom99lab1/main/story/shop.png";
	//elephant icon
	const elephant = "https://raw.githubusercontent.com/Irenheard/geom99lab1/main/story/elephant.png";
	
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
		strokeColor: "#ff00ff",
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
		strokeColor: "##ff00ff",
		strokeOpacity: 1.0,
		strokeWeight: 2,
	});

	flightOne.setMap(map)
	flightTwo.setMap(map)
	driveOne.setMap(map)
	driveTwo.setMap(map)
	
/*
template for the legend referenced:
https://developers.google.com/maps/documentation/javascript/adding-a-legend#maps_legend-javascript
*/
	const icons = {
		flight: {
			name: "Drive",
			icon: "drive.png",
		},
		drive: {
			name: "Flight",
			icon:"flight.png",
		},
		plane: {
			name: "Airport"	,
			icon: "airport.png"
		},
		market: {
			name: "Shop"	,
			icon: "shop.png"
		},
		africa: {
			name: "Pidwa"	,
			icon: "elephant.png"
		},		
	};
	
	const legend = document.getElementById("legend");

	for (const key in icons) {
		const type = icons[key];
		const name = type.name;
		const icon = type.icon;
		const div = document.createElement("div");

		div.innerHTML = '<img src="' + icon + '"> ' + name;
		legend.appendChild(div);
	}

	map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
	
/*
template for the markers referenced:
https://developers.google.com/maps/documentation/javascript/markers
*/
	
	const airportOneMarker = new google.maps.Marker({
		position: toronto,
		map,
		icon: airport,
	});
	
	const airportTwoMarker = new google.maps.Marker({
		position: london,
		map,
		icon: airport,
	});
	
	const airportThreeMarker = new google.maps.Marker({
		position: joburg,
		map,
		icon: airport,
	});
	
	const shopMarker = new google.maps.Marker({
		position: mokopane,
		map,
		icon: shop,
	});
	
	const pidwaMarker = new google.maps.Marker({
		position: askari,
		map,
		icon: elephant,
	});
	
	
	
}// last bracket



window.initMap = initMap;
