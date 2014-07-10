//'map' Settings
var map = L.map( 'map', {
    center: [-10.6, -68.8],
    minZoom: 2,
    zoom: 3
});

//LatLng Bounds Settings
/*
var southWest = L.latLng(-51.5, -94.2),
    northEast = L.latLng(-14.9, -28.9),
    bounds = L.latLngBounds(southWest, northEast);
*/

//OSM Base Map
L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
}).addTo( map );

