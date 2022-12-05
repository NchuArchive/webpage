var bignews = new Vue({
  el: '#bigNews',
  data() {
    return {
      view: 0,
      selectPeriods: null,
      timelins: {}
    }
  },
  computed: {
    timeline() {
      return _.get(this.timelins, [this.selectPeriods], [])
    }
  },
  mounted() {
    var url = $.getJSON('../data/bignews.json')

    $.when(url).done((data) => {
      var periodTitle = ['台灣總督府時期', '台北帝國大學時期', '台灣總督府台中農林學校時期(台中)', '省立農學院時期', '國立中興大學時期', '國立中興大學時期']

      $.each(data, (key, val) => {
        var title = periodTitle[key]
        var news = val

        _.setWith(this.timelins, [key], {'title': title, 'news': news}, Object)
      })
      this.selectPeriods = 0
    })
  },
  methods: {
  }
})
