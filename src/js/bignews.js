$(document).ready(function() {
  var period = ['台灣總督府時期', '省立農學院時期', '國立中興大學時期'];
  var api = '19ElFzY33pZJbx_ICQW9PhtliXZG9QjzXdO_8Dl5O-5c';
  var apiUrl = 'http://gsx2json.com/api?id=' + api + '&sheet=';
  var timeline = [];

  var bignews = new Vue({
    el: '#bigNews',
    data() {
      return {
        periods: period[0],
        view: 0,
        timeline: [],
      }
    },
    mounted() {
      var a1 = $.getJSON(apiUrl + '1'),
          a2 = $.getJSON(apiUrl + '2'),
          a3 = $.getJSON(apiUrl + '3');

      var my = this;
      $.when(a1, a2, a3).done(function(r1, r2, r3) {
        timeline.push(r1[0]['rows']);
        timeline.push(r2[0]['rows']);
        timeline.push(r3[0]['rows']);
        my.timeline = timeline[0];
      });
    },
    methods: {
      switchPeriods: function(item) {
        this.periods = period[item];
        this.view = item;
        this.timeline = timeline[item];
      }
    },
  });
});
