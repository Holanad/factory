mapboxgl.accessToken = 'pk.eyJ1IjoicGV0cjlyYSIsImEiOiJja3R4ZzljY3IydGZuMnVtcG8wYWhxbXN4In0.HGFIKLDAaHlQvTlPUPs9BQ';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/petr9ra/cktxgcipj1prm18mcpfa1edty',
  center: [2.3363, 48.8609],
  zoom: 16 
});
map.addControl(new mapboxgl.NavigationControl());