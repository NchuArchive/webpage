'use strict';

var principal = new Vue({
  el: '#principal',
  data: function data() {
    return {
      principals: [],
      principalInfo: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    var api = '1MA_7CkvGzbdhkiarcvOqcWrYBWS-gGI804ymEkU0afM';
    var apiUrl = 'http://gsx2json.com/api?id=' + api + '&sheet=';
    var getSheet = $.getJSON(apiUrl);

    var googleSheet = [];

    $.when(getSheet).done(function (data) {
      $.each(data['rows'], function (key, val) {
        _this.principals.push(val);
      });
    });
  },

  methods: {
    showInfo: function showInfo(num) {
      this.principalInfo = this.principals[num]['info'];
      $('#principal .modal').modal('show');
    }
  }
});