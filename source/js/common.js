$(function () {
  $('.diploms-slider').slick({
    accessibility: true,
    arrows: false,
    dots: true,
    speed: 1500,
    dotsClass: "baner__slider-dots",
    // responsive: [
    //   {
    //     breakpoint: 1480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       centerMode: false,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 1199,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   },
    //   {
    //     breakpoint: 991,
    //     settings: {
    //       slidesToShow: 1,
    //       arrows: false,
    //       slidesToScroll: 1
    //     }
    //   },
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       slidesToShow: 1,
    //       arrows: false,
    //       slidesToScroll: 1
    //     }
    //   },
    //   {
    //     breakpoint: 575,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       dots: true,
    //       arrows: false,
    //     }
    //   }
    //   // You can unslick at a given breakpoint now by adding:
    //   // settings: "unslick"
    //   // instead of a settings object
    // ]
  });

  $('.reviews-slider').slick({
    accessibility: true,
    prevArrow: '<button class="slick__slider-left slick__slider__btn"></button>',
    nextArrow: '<button class="slick__slider-right slick__slider__btn"></button>',
    dots: false,
    infinite: true,
    // dotsClass: "baner__slider-dots",
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          dots: false
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }); 
});

























