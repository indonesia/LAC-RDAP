var geojsonLayer = new L.GeoJSON();

//Defining Geo-Data Function
function getJson(data) {
     console.log(data)
     geojsonLayer.addData(data);
};

//AJAX GeoJSON Import
$.ajax({
      url: "http://localhost:8080/geoserver/LAC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=LAC:RDAP&maxFeatures=50&outputFormat=text/javascript&format_options=callback:getJson",
      dataType: 'jsonp',
      jsonpCallback: 'getJson',
      contentType: 'application/json',
      success: function (data, textStatus, jqXHR) {
        var geojson = jQuery.parseJSON(eval(data).d);
        map.removeLayer(geojsonLayer);
        geojsonLayer = L.geoJson(geojson, {                
            pointToLayer: function (feature, latlng) {                    
                return new L.CircleMarker(latlng, {
                    radius: 5,
                    fillColor: "#A3C990",
                    color: "#000",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.4
                });
            },
        });
      }
});

//Add Data to Map
map.addLayer(geojsonLayer);


