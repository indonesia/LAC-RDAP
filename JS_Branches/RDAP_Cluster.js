var geojsonLayer = new L.GeoJSON();

//Defining Geo-Data Function
function getJson(data) {
     geojsonLayer.addData(data);
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

