$(function ($) {
    
    //about part slider
  $('.about-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
    arrows:false,
    
 responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    } 
  ]    
});

    //down to top button
    $(".bto").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 1000);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 80) {
            $(".bto").fadeIn();
        } else {
            $(".bto").fadeOut();
        }
    });
    

});