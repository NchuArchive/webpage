(function () {
  function Flickr (albumID) {
    this.init(albumID)
  }

  Flickr.prototype = {
    init: function (albumID) {
      this.user = '99297735@N08'
      this.album = albumID

      window.getPhotos = this.getPhotos

      this.getJSON()
    },
    getJSON: function () {
      var src = 'http://api.flickr.com/services/feeds/photoset.gne?nsid=' + this.user + '&set=' + this.album + '&format=json&jsoncallback=getPhotos'
      var script = document.createElement('script')
      script.src = src
      document.body.appendChild(script)
    },
    getPhotos: function (data) {
      var limit = 20

      if (data && data.items) {
        var title = data.title
        var items = data.items
        var albumTitle = title.replace('Content from ', '')
        var html = '<h3>' + albumTitle + '</h3>'
        html += '<div class="images">'

        for (var i = 0; i < items.length; ++i) {
          var item = items[i]
          var n = i + 1
          if (n <= limit) {
            html += "<a href='" + item.link + "'><img src='" + item.media.m + "' alt='' /></a>"
          }
        }
        html += '</div>'

        $('#flickr').append(html)
      }
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var ary = [
      '72157685589705403',
      '72157687913102776',
      '72157685500115704',
      '72157687912925586',
      '72157687912856006',
      '72157687912777906',
      '72157685589198003',
      '72157685589105953',
      '72157685589034673',
      '72157684442594632',
      '72157685200126141',
      '72157685448752440',
      '72157681597863776',
      '72157679740848361',
      '72157679984374820',
      '72157678267625034',
      '72157681597520836',
      '72157681696017195',
      '72157679747210280',
      '72157677975151564',
      '72157681341413016',
      '72157634761192594',
      '72157634761074590',
      '72157634754446793',
      '72157634754429565',
      '72157634754395253',
      '72157634754362753',
      '72157634754323859',
      '72157634760822780',
      '72157634760758816']
    for (var i = 0; i < ary.length; i++) {
      var flickrFeed = new Flickr(ary[i])
    }
  })
})()
