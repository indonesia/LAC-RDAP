//Begin JavaScript
var geojsonLayer = new L.GeoJSON();

//Create Global Marker Properties
var markers = {
    radius: 4,
    fillColor: "#ff7800",
    color: "#fff",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

//Defining Geo-Data Function
function getJson(data) {

	//Add Markers to Map
	L.geoJson(data, {
    		pointToLayer: function (feature, latlng) {
        	return L.circleMarker(latlng, markers);
    		}
	}).addTo(map);	

	//Adding Pop-ups
	/*
	function geojsonLayer(feature, layer) {
		var popupContent = '<table><tr></tr><tr><th>Country</th><td>' + feature.properties.COUNTRY + '</td></tr><tr><th>City</th><td>' + feature.properties.CITY + '</td></tr><tr><th>First Name</th><td>' + feature.properties.FIRST_NAME + '</td></tr><tr><th>Last Name</th><td>' + feature.properties.LAST_NAME + '</td></tr><tr><th>Profession</th><td>' + feature.properties.PROFESSION + '</td></tr><tr><th>Expert</th><td>' + feature.properties.EXPERT + '</td></tr><tr><th>Home</th><td>' + feature.properties.HOME + '</td></tr><tr><th>Office</th><td>' + feature.properties.OFFICE + '</td></tr><tr><th>Phone</th><td>' + feature.properties.CELULAR + '</td></tr><tr><th>E-mail</th><td>' + feature.properties.EMAIL + '</td></tr></table>';
	layer.bindPopup(popupContent);
	}
	*/

	//Add Marker Cluster
	/*
	var markers = new L.MarkerClusterGroup(data, { 
     		maxClusterRadius: 100,
     		spiderfyOnMaxZoom: true, 
     		showCoverageOnHover: false,
     		zoomToBoundsOnClick: true 
	});map.addLayer(markers);
	*/
};

//AJAX GeoJSON Import
$.ajax({
      url: "http://localhost:8080/geoserver/LAC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=LAC:RDAP&maxFeatures=450&outputFormat=text/javascript&format_options=callback:getJson",
      dataType: 'jsonp',
      jsonpCallback: 'getJson',
      contentType: 'application/json',
      success: getJson
});

//Add Data to Map
map.addLayer(geojsonLayer);


