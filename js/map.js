L.mapbox.accessToken = 'pk.eyJ1IjoibGV5dGgiLCJhIjoiY2lmYW9zZDZ3Mmg0a3N4bTdia2J0cW8zdCJ9.jwo5Yz6jwQO2gRwa_FPu8w';
var map = L.mapbox.map('map', 'mapbox.streets').setView([47.708927, -122.312807], 10);
var myLayer = L.mapbox.featureLayer().addTo(map);
var timestamp = new Date();
myLayer.setGeoJSON([{
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-122.312807, 47.708927]
        },
        properties: {
            name: 'Masjid Idris Northgate',
            description: 'Video link',
            address: 'All Dulles Area Muslim Society',
            'marker-id': 'marker-1',
            'marker-color': '#f86767',
            khutbas: [
                  {
                    location: 'main center',
                    livestream_url: 'https://www.youtube.com/watch?v=iwKG67­PUbg',
                    livestream_provider: 'youtube',
                    khateeb_name: 'Wissam Sharrief',
                    start_time: timestamp,
                    duration_in_mins: 60,
                    languages: ['english','arabic']
                  }

            ], 
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-122.307710, 47.789710]
        },
        properties: {
            name: 'Masjid Umar al-Farooq',
            description: 'Video link',
            address: 'All Dulles Area Muslim Society',
            'marker-id': 'marker-1',
            'marker-color': '#f86767',
            khutbas: [
                  {
                    location: 'main center',
                    livestream_url: 'https://www.youtube.com/watch?v=iwKG67­PUbg',
                    livestream_provider: 'youtube',
                    khateeb_name: 'Wissam Sharrief',
                    start_time: timestamp,
                    duration_in_mins: 60,
                    languages: ['english','arabic']
                  }

            ], 
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-122.295652, 47.662612]
        },
        properties: {
            name: 'Islamic House',
            description: 'Video link',
            address: 'All Dulles Area Muslim Society',
            'marker-id': 'marker-1',
            'marker-color': '#f86767',
            khutbas: [
                  {
                    location: 'main center',
                    livestream_url: 'https://www.youtube.com/watch?v=iwKG67­PUbg',
                    livestream_provider: 'youtube',
                    khateeb_name: 'Wissam Sharrief',
                    start_time: timestamp,
                    duration_in_mins: 60,
                    languages: ['english','arabic']
                  }

            ], 
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-122.146138, 47.616552]
        },
        properties: {
            name: 'Islamic Center of Eastside',
            description: 'Video link',
            address: 'All Dulles Area Muslim Society',
            'marker-id': 'marker-1',
            'marker-color': '#f86767',
            khutbas: [
                  {
                    location: 'main center',
                    livestream_url: 'https://www.youtube.com/watch?v=iwKG67­PUbg',
                    livestream_provider: 'youtube',
                    khateeb_name: 'Wissam Sharrief',
                    start_time: timestamp,
                    duration_in_mins: 60,
                    languages: ['english','arabic']
                  }

            ], 
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-122.105451, 47.670936] 
        },
        properties: {
            name: 'MAPS',
            description: 'Video link',
            address: 'All Dulles Area Muslim Society',
            'marker-id': 'marker-1',
            'marker-color': '#f86767',
            khutbas: [
                  {
                    location: 'main center',
                    livestream_url: 'https://www.youtube.com/watch?v=iwKG67­PUbg',
                    livestream_provider: 'youtube',
                    khateeb_name: 'Wissam Sharrief',
                    start_time: timestamp,
                    duration_in_mins: 60,
                    languages: ['english','arabic']
                  }

            ], 
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-122.189879, 47.784704]
        },
        properties: {
            name: 'Islamic Center of Bothell',
            description: 'Video link',
            address: 'All Dulles Area Muslim Society',
            'marker-id': 'marker-1',
            'marker-color': '#f86767',
            khutbas: [
                  {
                    location: 'main center',
                    livestream_url: 'https://www.youtube.com/watch?v=iwKG67­PUbg',
                    livestream_provider: 'youtube',
                    khateeb_name: 'Wissam Sharrief',
                    start_time: timestamp,
                    duration_in_mins: 60,
                    languages: ['english','arabic']
                  }

            ], 
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-122.302871, 47.774946 ]
        },
        properties: {
            name: 'Islamic Center of Shoreline',
            description: 'Video link',
            address: 'All Dulles Area Muslim Society',
            'marker-id': 'marker-1',
            'marker-color': '#f86767',
            khutbas: [
                  {
                    location: 'main center',
                    livestream_url: 'https://www.youtube.com/watch?v=iwKG67­PUbg',
                    livestream_provider: 'youtube',
                    khateeb_name: 'Wissam Sharrief',
                    start_time: timestamp,
                    duration_in_mins: 60,
                    languages: ['english','arabic']
                  }

            ], 
        }
    }
]);

var info = document.getElementById('info');

// Iterate through each feature layer item, build a
// marker menu item and enable a click event that pans to + opens
// a marker that's associated to the marker item.
myLayer.eachLayer(function(marker) {
  var link = info.appendChild(document.createElement('a'));
  link.className = 'item';
  link.href = '#';

  // Populate content from each markers object.
  link.innerHTML = marker.feature.properties.name +
    '<br /><small>' + marker.feature.properties.description + '</small>';
  link.onclick = function() {
    if (/active/.test(this.className)) {
      this.className = this.className.replace(/active/, '').replace(/\s\s*$/, '');
    } else {
      var siblings = info.getElementsByTagName('a');
      for (var i = 0; i < siblings.length; i++) {
        siblings[i].className = siblings[i].className
          .replace(/active/, '').replace(/\s\s*$/, '');
      };
      this.className += ' active';

      // When a menu item is clicked, animate the map to center
      // its associated marker and open its popup.
      map.panTo(marker.getLatLng());
      marker.openPopup();
    }
    return false;
  };
});
