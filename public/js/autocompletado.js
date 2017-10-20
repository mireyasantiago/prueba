//alert("Frlisto");

var placeSearch;
var autocomplete;


function initAutocomplete() {
	autocomplete = new google.maps.places.Autocomplete(
	    /** @type {!HTMLInputElement} */(document.getElementById('autocompletar')),
	    {types: ['geocode']
	});

}
function geolocate() {
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(function(position) {
	    var geolocation = {
	      lat: position.coords.latitude,
	      lng: position.coords.longitude
	    };
	    var circle = new google.maps.Circle({
	      center: geolocation,
	      radius: position.coords.accuracy
	    });
	    autocomplete.setBounds(circle.getBounds());
	  });
	}
}