$(document).ready(() => {

  $(window).load(() => {
    $('.honeycombs').honeycombs();
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
  });

  $('.owl-carousel').on('translate.owl.carousel', (e)=> {
    console.log('slide');
  });
});
