$(function(){

$('.slider').slick({
   slidesToScroll: 3,
   slidesToShow: 3,
   arrows:false,
   dots: true,
   arrow: false,
   autoplay: true,
   autoplaySpeed: 2000,
   Infinity: true,
   responsive: [
      {
         breakpoint: 1175,
         settings: {
            slidesToScroll: 2,
            slidesToShow: 2
         }
      },
      {
         breakpoint: 769,
         settings: {
            slidesToScroll: 1,
            slidesToShow: 1
         }
      }
   ]
});

$('.menu__btn').click(function (event) {
   $('.menu__btn,.menu__list').toggleClass('active');
   $('body').toggleClass('lock');
 });

});
