

function cargarPagina() {
  obtenerUbicacionActual();
}

function obtenerUbicacionActual() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(mostrarPosicionActual, function (error) {
      console.log(error);
    });
  } else {
    alert("Geolocalización no es soportado en tu navegador");
  }
}

function mostrarPosicionActual(posicion) {
  var latitud = posicion.coords.latitude;
  var longitud = posicion.coords.longitude;

  var coordenadas = {
    lat: latitud,
    lng: longitud
  };

  mostrarMapa(coordenadas);
}

// @coordenadas: { lat: <number>, lng: <number> }
function mostrarMapa(coordenadas) {
  var map = new google.maps.Map($('#map')[0], {
    zoom: 17,
    center: coordenadas
  });
// para la activacion de autocompletado se activa en https://developers.google.com/maps/documentation/javascript
  var inputAutocompletado = document.getElementById("pac-input");
  var busqueda = new google.maps.places.Autocomplete(inputAutocompletado);
      busqueda.bindTo('bounds', map);
  var informacion = new google.maps.InfoWindow();
    
  var marker = new google.maps.Marker({
    position: coordenadas,
    map: map
  });
    
  busqueda.addListener('place_changed', function(){
      informacion.close();
      marker.setVisible(false);
      var place = busqueda.getPlace();
      
      if (!place.geometry){
          window.alert("Error al mostrar el error");
            return;
      }
      if (place.geometry.viewport){
          map.fitBounds(place.geometry.viewport);
      }else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
      }
      
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
      
      var direccion = "";
      if (place.address_components){
          direccion = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ];
          
      }
      
      informacion.setContent('<div><strong>' + place.name + '</strong><br>' + direccion);
      informacion.open(map, marker);
      
      
      
  });    
  /*autocomplete.addListener('place_changed', function() {
          infowindow.close();
          marker.setVisible(false);
          
      var place = busqueda.getPlace();
          if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }

          // If the place has a geometry, then present it on a map.
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
          }
          marker.setIcon(/** @type {google.maps.Icon} ({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
          }));
          marker.setPosition(place.geometry.location);
          marker.setVisible(true);

          var address = '';
          if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
          }

          infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
          infowindow.open(map, marker);
        });

        // Sets a listener on a radio button to change the filter type on Places
        // Autocomplete.
        function setupClickListener(id, types) {
          var radioButton = document.getElementById(id);
          radioButton.addEventListener('click', function() {
            autocomplete.setTypes(types);
          });
        }

        setupClickListener('changetype-all', []);
        setupClickListener('changetype-address', ['address']);
        setupClickListener('changetype-establishment', ['establishment']);
        setupClickListener('changetype-geocode', ['geocode']);    
    
    */
}



$(document).ready(cargarPagina);

//es la clave  AIzaSyCirtGDP1vAyTKEc1-DJVSon49cP9z98kI





