var geojsonLayer = new L.GeoJSON();

//Defining Geo-Data Function
function getJson(data) {
     console.log(data)
     geojsonLayer.addData(data);

	//Custom Marker Variables
	var testIcon = L.icon({
    	iconUrl: 'http://localhost/LAC/Icons/leaf-green.png',
    	shadowUrl: 'http://localhost/LAC/Icons/leaf-shadow.png',

    	iconSize:     [38, 95], // size of the icon
    	shadowSize:   [50, 64], // size of the shadow
    	iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    	shadowAnchor: [4, 62],  // the same for the shadow
    	popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor

	});

//Add Custom Markers to map
L.marker([xxxxxx], {icon: testIcon}).addTo(map);

};

//AJAX GeoJSON Import
$.ajax({
      url: "http://localhost:8080/geoserver/LAC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=LAC:RDAP&maxFeatures=50&outputFormat=text/javascript&format_options=callback:getJson",
      dataType: 'jsonp',
      jsonpCallback: 'getJson',
      contentType: 'application/json',
      success: getJson
});

//Add Data to Map
map.addLayer(geojsonLayer);


