var bignews = new Vue({
  el: '#bigNews',
  data() {
    return {
      view: 0,
      selectPeriods: null,
      timelins: {},
    }
  },
  computed: {
    timeline() {
      return _.get(this.timelins, [this.selectPeriods], []);
    }
  },
  mounted() {
    var api = '19ElFzY33pZJbx_ICQW9PhtliXZG9QjzXdO_8Dl5O-5c',
        apiUrl = 'http://gsx2json.com/api?id=' + api + '&sheet=';
    var googleSheet = [];

    for (var i = 1; i <= 5; i++) {
      googleSheet.push($.getJSON(apiUrl + i));
    }
    $.when
      .apply($, googleSheet)
      .then((...careerData) => {
        var periodTitle = ['台灣總督府時期', '台北帝國大學時期', '台灣總督府台中農林學校時期(台中)', '省立農學院時期', '國立中興大學時期'];
        $.each(careerData, (key, val) => {
          var title = periodTitle[key],
              news = val[0]['rows'];

          _.setWith(this.timelins, [key], {'title': title, 'news': news}, Object);
        });
        this.selectPeriods = 0;
      });
  },
  methods: {
  },
});
