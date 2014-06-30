var geojsonLayer = new L.GeoJSON();

//Defining Geo-Data Function
function getJson(data) {
     console.log(data)
     geojsonLayer.addData(data);

	//Custom Marker Variables
	var myIcon = L.Icon.extend({
		iconUrl: 'http://localhost/LAC/Icons/leaf-green.png',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
		
        });
	
	L.geoJson(data, {
	  pointToLayer: function (feature, latLng) {
            return new L.Marker(latLng, {
              icon: new myIcon({
              iconUrl: 'http://localhost/LAC/Icons/leaf-green.png'
              })
            })
          }
        })
//Add Custom Markers to map
.addTo(map);

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


