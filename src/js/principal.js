var principal = new Vue({
  el: '#principal',
  data() {
    return {
      principals: [],
    }
  },
  mounted() {
    var api = '1MA_7CkvGzbdhkiarcvOqcWrYBWS-gGI804ymEkU0afM',
        apiUrl = 'http://gsx2json.com/api?id=' + api + '&sheet=';
    var getSheet = $.getJSON(apiUrl);

    var googleSheet = [];

    $.when(getSheet).done((data)=> {
      $.each(data['rows'], (key, val)=> {
        this.principals.push(val);
      });
    });
  },
});
