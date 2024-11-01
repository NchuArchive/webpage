var principal = new Vue({
  el: '#principal',
  data() {
    return {
      principals: [],
      principalInfo: '',
    }
  },
  mounted() {
    var api = '1duHihJkNVZR5zGyvqtFintCuNuSWKVkpvFOFYkiFSAg'
    var apiUrl = 'http://gsx2json.com/api?id=' + api + '&sheet=worksheet'
    var getSheet = $.getJSON(apiUrl)

    var googleSheet = []

    $.when(getSheet).done((data) => {
      $.each(data['rows'], (key, val) => {
        this.principals.push(val)
      })
    })
  },
  methods: {
    showInfo(num) {
      this.principalInfo = this.principals[num]['info']
      $('.modal').modal('show')
    }
  }
})
