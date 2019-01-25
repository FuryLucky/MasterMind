//////////////// MAP ////////////////
const map = L.map('map').setView([51.5238557,-0.1049106,21], 16);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  	attribution: 'Frugal Map'
}).addTo(map);

const icon = L.divIcon({
	html: '<i class="fas fa-map-marker" style="font-size: 30px; color: #ff592f;"></i>',
	iconSize: [24,36],
	iconAnchor: [12,36],
	className: 'divMarker'
});
L.marker([51.5238557,-0.1049106,21], {icon: icon}).addTo(map);
//////////////// /// ////////////////