$(document).ready(function(){
    $('.portfolio__slider').slick({
        speed: 1200,
        // autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
        {
           breakpoint: 992,
           settings: {
            dots: false,
            arrows: false,
        }
    }
    ]
});

      //smooth scroll and pageup
      $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
          $('.pageup').fadeIn();
      } else {
          $('.pageup').fadeOut();
      }
  });

      $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });


      new WOW().init();
  });