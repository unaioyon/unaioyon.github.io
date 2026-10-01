/*
 * Recommendation map — init logic, shared by the English and Spanish
 * pages. Load a data file (map-data.js or map-es.js) — which defines
 * CITIES and MAP_I18N — before this script.
 */
function mapStyleFor(theme) {
  // Embedded (not fetched) so the map still renders when this file is
  // opened directly (file://) rather than served over http/https.
  return theme === 'dark' ? window.MAP_STYLE_DARK : window.MAP_STYLE_LIGHT;
}

document.addEventListener('DOMContentLoaded', function () {
  var mapEl = document.getElementById('rec-map');
  if (!mapEl || typeof maplibregl === 'undefined') return;

  var currentTheme = typeof window.getEffectiveTheme === 'function' ? window.getEffectiveTheme() : 'light';

  var map = new maplibregl.Map({
    container: 'rec-map',
    style: mapStyleFor(currentTheme),
    center: [4, 45],
    zoom: 3.2,
    scrollZoom: false,
    attributionControl: false
  });

  document.addEventListener('themechange', function (e) {
    map.setStyle(mapStyleFor(e.detail.theme));
  });

  var openPopup = null;

  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-left');

  var allBounds = new maplibregl.LngLatBounds();
  var markersByCity = {};

  CITIES.forEach(function (city) {
    markersByCity[city.id] = [];
    city.spots.forEach(function (spot) {
      var el = document.createElement('div');
      el.className = 'rec-marker';
      el.innerHTML = '<span></span>';

      var popup = new maplibregl.Popup({ offset: 14, closeButton: false }).setHTML(
        '<div class="popup-cat">' + spot.cat + '</div>' +
        '<div class="popup-title">' + spot.title + '</div>' +
        '<div class="popup-note">' + spot.note + '</div>'
      );
      popup.on('open', function () {
        if (openPopup && openPopup !== popup) openPopup.remove();
        openPopup = popup;
      });

      var marker = new maplibregl.Marker({ element: el })
        .setLngLat([spot.lng, spot.lat])
        .setPopup(popup)
        .addTo(map);

      markersByCity[city.id].push(marker);
      allBounds.extend([spot.lng, spot.lat]);
    });
  });

  var sidebar = document.getElementById('map-city-list');
  var buttons = {};

  CITIES.forEach(function (city) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'map-city-btn';
    btn.setAttribute('data-city', city.id);
    var spotWord = city.spots.length === 1 ? MAP_I18N.spot : MAP_I18N.spots;
    btn.innerHTML =
      '<span class="city-name">' + city.name + '</span><br>' +
      '<span class="city-count">' + city.context + ' · ' + city.spots.length + ' ' + spotWord + '</span>';
    btn.addEventListener('click', function () {
      map.flyTo({ center: city.center, zoom: city.zoom, duration: 800 });
      Object.keys(buttons).forEach(function (id) {
        buttons[id].classList.toggle('is-active', id === city.id);
      });
      var firstMarker = markersByCity[city.id][0];
      if (firstMarker) firstMarker.togglePopup();
    });
    buttons[city.id] = btn;
    sidebar.appendChild(btn);
  });

  map.on('load', function () {
    if (!allBounds.isEmpty()) {
      map.fitBounds(allBounds, { padding: 60, duration: 0 });
    }
  });
});
