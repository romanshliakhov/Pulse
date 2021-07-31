$(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/next.svg"></button>',
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function () {
    $(this)
      .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
  });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog__item-content').eq(i).toggleClass('catalog__item-content--active');
        $('.catalog__item-list').eq(i).toggleClass('catalog__item-list--active');
      })
    });
  };

  toggleSlide('.catalog__item-link');
  toggleSlide('.catalog__item-back');

  // modal
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn();
  });

  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks').fadeOut();
  });

  $('.button__catalog').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog__item-title').eq(i).text())
      $('.overlay, #order').fadeIn();
    });
  });

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true,
        }
      },
      messages: {
        name: "Пожалуйста, введите своё имя",
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты name@domain.com"
        }
      }
    });
  };

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  $('input[name=phone]').mask("+38 (999) 999-9999");

  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('');

      $(form).trigger('reset');
    });

    return false;
  });

  // Smooth scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
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
});
