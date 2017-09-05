'use strict';

var outstanding = new Vue({
  el: '#outstanding',
  data: function data() {
    return {
      outstanding: {}
    };
  },

  computed: {},
  mounted: function mounted() {
    var _this = this;

    $.getJSON('./data/outstanding.json').then(function (data) {
      _this.outstanding = data;
    });
  },

  methods: {}
});