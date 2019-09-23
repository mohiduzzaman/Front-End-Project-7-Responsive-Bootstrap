$(function(){
// About part slider
$('.about-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
    arrows:false,
    
 responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      }
    } 
  ]    
});
    
    
});