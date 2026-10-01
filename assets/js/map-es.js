/*
 * Mapa de recomendaciones — versión en español de los datos.
 * Mantener esta lista en el mismo orden y con los mismos ids/coordenadas
 * que assets/js/map-data.js; solo se traduce el texto visible (context, cat, note).
 */
var MAP_I18N = { spot: 'lugar', spots: 'lugares' };

var CITIES = [
  {
    id: 'paris',
    name: 'París',
    context: 'PSE — base principal',
    center: [2.3522, 48.8566],
    zoom: 11.5,
    spots: [
      {
        cat: 'Café',
        title: 'Café Lomi',
        lng: 2.348, lat: 48.891,
        note: 'Tostadero en el distrito 18 — ideal para trabajar por la tarde.'
      },
      {
        cat: 'Librería',
        title: 'Shakespeare and Company',
        lng: 2.3473, lat: 48.8524,
        note: 'Un clásico, pero la sala de lectura de arriba se lo merece.'
      },
      {
        cat: 'Paseo',
        title: 'Promenade Plantée',
        lng: 2.3746, lat: 48.8489,
        note: 'Parque elevado sobre el distrito 12, tranquilo por la mañana temprano.'
      }
    ]
  },
  {
    id: 'cambridge',
    name: 'Cambridge, MA',
    context: 'MIT — investigador visitante',
    center: [-71.0942, 42.3601],
    zoom: 12.5,
    spots: [
      {
        cat: 'Café',
        title: 'Voltage Coffee & Art',
        lng: -71.1097, lat: 42.3736,
        note: 'Espresso fiable cerca del campus, raramente ruidoso.'
      },
      {
        cat: 'Librería',
        title: 'Harvard Book Store',
        lng: -71.1178, lat: 42.3730,
        note: 'Buena sección académica y de libros usados.'
      }
    ]
  },
  {
    id: 'providence',
    name: 'Providence, RI',
    context: 'Brown University — investigador visitante',
    center: [-71.4025, 41.8268],
    zoom: 12.5,
    spots: [
      {
        cat: 'Paseo',
        title: 'College Hill',
        lng: -71.4025, lat: 41.8259,
        note: 'La mejor vista del centro al atardecer.'
      },
      {
        cat: 'Café',
        title: 'White Electric Coffee',
        lng: -71.4128, lat: 41.8277,
        note: 'Sitio en Federal Hill, ideal para una mañana tranquila.'
      },
      {
        cat: 'Restaurante',
        title: 'Jahunger',
        lng: -71.3964963, lat: 41.819448,
        note: 'La primera vez que probé comida uigur. Sus fideos eran excelentes.'
      },
      {
        cat: 'Café',
        title: 'Brown Bee Coffee',
        lng: -71.4017046, lat: 41.8202467,
        note: 'Café acogedor para unos croissants de calabaza y especias caros pero deliciosos, cerca de College Hill.'
      }
    ]
  },
  {
    id: 'madrid',
    name: 'Madrid',
    context: 'CEMFI — investigador visitante',
    center: [-3.7038, 40.4168],
    zoom: 11.5,
    spots: [
      {
        cat: 'Paseo',
        title: 'El Retiro',
        lng: -3.6844, lat: 40.4153,
        note: 'La rosaleda en primavera merece el desvío.'
      },
      {
        cat: 'Restaurante',
        title: 'Mercado de San Miguel',
        lng: -3.7092, lat: 40.4153,
        note: 'Turístico pero realmente bueno para un bocado rápido.'
      }
    ]
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    context: 'UPF — grado',
    center: [2.1734, 41.3851],
    zoom: 11.5,
    spots: [
      {
        cat: 'Paseo',
        title: 'Bunkers del Carmel',
        lng: 2.1590, lat: 41.4193,
        note: 'La mejor vista de la ciudad, llega antes de la puesta de sol.'
      },
      {
        cat: 'Café',
        title: 'Nomad Coffee Lab',
        lng: 2.1701, lat: 41.3868,
        note: 'Pequeño, serio con el café.'
      }
    ]
  }
];
