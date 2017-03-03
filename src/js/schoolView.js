var vm = new Vue({
  el: '#schoolView',
  data() {
    return {
      cards: [],
    }
  },
  mounted() {
    var api = '16ljIVS5HFnAYtDQ2ILuxZK-Fm_WvUDBamkC6rLrLu_A',
        apiUrl = 'http://gsx2json.com/api?id=' + api + '&sheet=';
    var getSheet = $.getJSON(apiUrl);

    var googleSheet = [];

    $.when(getSheet).done((data) => {
      $.each(data['rows'], (key, val) => {
        this.cards.push(val);
      });
      $('.special.cards .image').dimmer({
        on: 'hover'
      });
    });
  },
})
