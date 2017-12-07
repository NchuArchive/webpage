var vm = new Vue({
  el: '#schoolView',
  data() {
    return {
      cards: []
    }
  },
  mounted() {
    var getSheet = $.getJSON('../data/schoolView.json')

    $.when(getSheet).done((data) => {
      $.each(data, (key, val) => {
        this.cards.push(val)
      })
    })
  }
})
