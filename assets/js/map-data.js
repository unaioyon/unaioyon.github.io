/*
 * Recommendation map — starting dataset (English).
 * Edit CITIES below to add/remove places: each city has a center [lng, lat]
 * (MapLibre order) and a list of spots. Category controls the marker label only.
 * The Spanish version of this file is assets/js/map-es.js — keep ids,
 * coordinates and structure in sync between the two; only translate text.
 */
var MAP_I18N = { spot: 'spot', spots: 'spots' };

var CITIES = [
  {
    id: 'paris',
    name: 'Paris',
    context: 'PSE — home base',
    center: [2.3522, 48.8566],
    zoom: 11.5,
    spots: [
      {
        cat: 'Café',
        title: 'Café Lomi',
        lng: 2.348, lat: 48.891,
        note: 'Roastery in the 18th — good for a working afternoon.'
      },
      {
        cat: 'Bookshop',
        title: 'Shakespeare and Company',
        lng: 2.3473, lat: 48.8524,
        note: 'A classic, but the upstairs reading room earns it.'
      },
      {
        cat: 'Walk',
        title: 'Promenade Plantée',
        lng: 2.3746, lat: 48.8489,
        note: 'Elevated park above the 12th, quiet in the early morning.'
      }
    ]
  },
  {
    id: 'cambridge',
    name: 'Cambridge, MA',
    context: 'MIT — visiting Ph.D. fellow',
    center: [-71.0942, 42.3601],
    zoom: 12.5,
    spots: [
      {
        cat: 'Café',
        title: 'Voltage Coffee & Art',
        lng: -71.1097, lat: 42.3736,
        note: 'Reliable espresso near campus, rarely too loud.'
      },
      {
        cat: 'Bookshop',
        title: 'Harvard Book Store',
        lng: -71.1178, lat: 42.3730,
        note: 'Strong academic and used sections.'
      }
    ]
  },
  {
    id: 'providence',
    name: 'Providence, RI',
    context: 'Brown University — visiting fellow',
    center: [-71.4025, 41.8268],
    zoom: 12.5,
    spots: [
      {
        cat: 'Walk',
        title: 'College Hill',
        lng: -71.4025, lat: 41.8259,
        note: 'Best view of downtown at dusk.'
      },
      {
        cat: 'Café',
        title: 'White Electric Coffee',
        lng: -71.4128, lat: 41.8277,
        note: 'Federal Hill spot, good for a slow morning.'
      },
      {
        cat: 'Restaurant',
        title: 'Jahunger',
        lng: -71.3964963, lat: 41.819448,
        note: 'My first time to ever try Uyghur food. Their signature noodles were great.'
      },
      {
        cat: 'Café',
        title: 'Brown Bee Coffee',
        lng: -71.4017046, lat: 41.8202467,
        note: 'Cozy café to get overpriced but tasty pumpkin-spice croissants close to College Hill.'
      }
    ]
  },
  {
    id: 'madrid',
    name: 'Madrid',
    context: 'CEMFI — visiting fellow',
    center: [-3.7038, 40.4168],
    zoom: 11.5,
    spots: [
      {
        cat: 'Walk',
        title: 'El Retiro',
        lng: -3.6844, lat: 40.4153,
        note: 'The rose garden in spring is worth the detour.'
      },
      {
        cat: 'Restaurant',
        title: 'Mercado de San Miguel',
        lng: -3.7092, lat: 40.4153,
        note: 'Touristy but genuinely good for a quick bite.'
      }
    ]
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    context: 'UPF — undergraduate',
    center: [2.1734, 41.3851],
    zoom: 11.5,
    spots: [
      {
        cat: 'Walk',
        title: 'Bunkers del Carmel',
        lng: 2.1590, lat: 41.4193,
        note: 'The best skyline view in the city, arrive before sunset.'
      },
      {
        cat: 'Café',
        title: 'Nomad Coffee Lab',
        lng: 2.1701, lat: 41.3868,
        note: 'Small, serious about the coffee.'
      }
    ]
  }
];

