var outstanding = new Vue({
  el: '#outstanding',
  data() {
    return {
      outstanding: {}
    }
  },
  computed: {
  },
  mounted() {
    $.getJSON('/data/outstanding.json').then((data) => {
      this.outstanding = data
    })
  },
  methods: {
  }
})
