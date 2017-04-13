$(document).ready(($) => {
  $(window).scroll(() => {
    if ($(window).scrollTop() > 186) {
      $('#scrollMenu').fadeIn(100)
    }
    else {
      $('#scrollMenu').fadeOut(100)
    }
  })
})
