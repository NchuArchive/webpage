'use strict';

var vm = new Vue({
  el: '#schoolView',
  data: function data() {
    return {
      cards: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    var api = '16ljIVS5HFnAYtDQ2ILuxZK-Fm_WvUDBamkC6rLrLu_A';
    var apiUrl = 'http://gsx2json.com/api?id=' + api + '&sheet=';
    var getSheet = $.getJSON(apiUrl);

    var googleSheet = [];

    $.when(getSheet).done(function (data) {
      $.each(data['rows'], function (key, val) {
        _this.cards.push(val);
      });
    });
  }
});