/*
 * Adds a stylised Google Map showing the Zoetrope office location
 * in place of a div with the ID 'map-canvas'.
 */


// Google Map for special section
var map;
var zoetrope_hq = new google.maps.LatLng(51.4602797,-2.6129449);
var map_id = 'map-canvas';
function initialize() {

  if(!document.getElementById(map_id)){
    return;
  }
  
  var featureOpts = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#222222"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#283c4f"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
          { "color": "#ffffff" }
        ]
    }
  ];

  // Set some basic options.
  var mapOptions = {
    zoom: 8,
    center: zoetrope_hq,
    scrollwheel: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, map_id]
    },
    mapTypeId: map_id,
    disableDefaultUI: true,
    zoomControl: true
  };

  // Just mobile settings
  var offset_zoetrope_hq = new google.maps.LatLng(51.452492, -2.577304);
  if ($(window).width() < 768) {
    mapOptions.draggable = false;
    mapOptions.center = offset_zoetrope_hq;
  }

  map = new google.maps.Map(document.getElementById(map_id),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  // Add a marker to the map
  var zoetrope_icon = '/assets/img/map-marker.png';
  var marker = new MarkerWithLabel({
      position: zoetrope_hq,
      map: map,
      title:"Zoetrope",
      animation: google.maps.Animation.DROP,
      icon: zoetrope_icon,
      labelContent: "<span>Zoetrope</span></br>26B Oakfield Road</br>Bristol</br>BS8 2AT",
      labelAnchor: new google.maps.Point(100, -30),
      labelClass: "marker-label",
      labelStyle: {opacity: 0.75}
   });

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(map_id, customMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);

