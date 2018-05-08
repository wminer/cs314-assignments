'use strict';
let map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 39.8283459, lng: -98.5794797},
      zoom: 4.3,
      styles: [
    {
        "stylers": [
            {
                "hue": "#bbff00"
            },
            {
                "weight": 0.5
            },
            {
                "gamma": 0.5
            }
        ]
    },
    {
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "stylers": [
            {
                "color": "#a4cc48"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            },
            {
                "weight": 1
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "gamma": 1.14
            },
            {
                "saturation": -18
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels",
        "stylers": [
            {
                "saturation": 30
            },
            {
                "gamma": 0.76
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "weight": 0.4
            },
            {
                "lightness": -8
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#4aaecc"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "stylers": [
            {
                "color": "#718e32"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "saturation": 68
            },
            {
                "lightness": -61
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "weight": 2.7
            },
            {
                "color": "#f4f9e8"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "weight": 1.5
            },
            {
                "color": "#e53013"
            },
            {
                "saturation": -42
            },
            {
                "lightness": 28
            }
        ]
    }
]
    });

    let marker = new google.maps.Marker({
      position: { lat: 47.6129432 , lng: -122.4821475 },
      map: map,
      title: "My Birthplace, Seattle"
    });

    marker = new google.maps.Marker({
      position: { lat: 42.8215174, lng: -106.4649636 },
      map: map,
      title: "My Mom's Birthplace, Casper"
    });

    marker = new google.maps.Marker({
      position: { lat: 42.3140089, lng: -71.2504676 },
      map: map,
      title: "My Dad's Birthplace, Boston"
    });



  }
