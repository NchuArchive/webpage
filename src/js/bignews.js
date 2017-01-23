$(document).ready(function() {
  var period = ['台灣總督府時期', '省立農學院時期', '國立中興大學時期'];

  var bignews = new Vue({
    el: '#bigNews',
    data() {
      return {
        periods: period[0],
        view: 0,
        japan: [
          {
            title: 'test',
            context: 'test text',
            date: '2016/01/01',
            newsType: 1,
          },
          {
            title: '1',
            context: '2',
            date: '2016/01/02',
            newsType: 2,
          }
        ],
      }
    },
    methods: {
      switchPeriods: function(item) {
        this.periods = period[item];
        this.view = item;
      }
    }
  });
});
