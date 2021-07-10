// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
var map = L.map('mapid').setView([34.0522, -118.2437], 4); //mapid id in index.html

// Get data from cities.js.
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
     console.log(city)
     L.circleMarker(city.location, {
         radius: city.population/100000
     })
     .bindPopup("<h2>" + city.city + ", " + city.state + "<h/2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>").addTo(map);
 });

// Skill Drill: create an orange circle popup marker for each city, with a lineweight of 4, a radius where the population number is decreased by 200,000,  that's on a dark map
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color: "orange",
//         weight: 4
//     }).bindPopup("<h2>" + city.city + ", " + city.state + "<h/2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>").addTo(map);
// })

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY //API key in config.js
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map); //map is the map object we created
