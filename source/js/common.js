$(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/next.svg"></button>',
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function() {
    $(this)
      .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
  });

  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog__item-content').eq(i).toggleClass('catalog__item-content--active');
        $('.catalog__item-list').eq(i).toggleClass('catalog__item-list--active');
      })
    });
  };

  toggleSlide('.catalog__item-link');
  toggleSlide('.catalog__item-back');
});


























