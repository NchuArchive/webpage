'use strict';

$(document).ready(function () {
  $(window).load(function () {
    var map = L.map('map').setView([24.123247, 120.675683], 17);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([24.123247, 120.675683]).addTo(map);
  });
});