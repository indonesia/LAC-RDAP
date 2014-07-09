//Begin JavaScript
var geojsonLayer = new L.GeoJSON();

//Create Global Marker Properties
var geojsonMarkerOptions = {
    radius: 4,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

//Defining Geo-Data Function
function getJson(data) {

	//Add Markers to Map
	L.geoJson(data, {
    		pointToLayer: function (feature, latlng) {
        	return L.circleMarker(latlng, geojsonMarkerOptions);
    		}
	}).addTo(map);	

	//Add Marker Cluster
	var geojsonMarkerOptions = new L.MarkerClusterGroup(data, { 
     		maxClusterRadius: 60,
		iconCreateFunction: null,
     		spiderfyOnMaxZoom: true, 
     		showCoverageOnHover: true,
     		zoomToBoundsOnClick: true 
	});map.addLayer(geojsonMarkerOptions);

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
map.fitBounds(feature_group.getBounds());

