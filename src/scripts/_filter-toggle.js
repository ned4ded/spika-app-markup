export default () => {
  var filter = $('.js-filter');
  var close = $('.js-filter-close');
  var open = $('.js-filter-open');

  close.click(function () {
    filter.removeClass('filter__inner-opened');
  });
  open.click(function () {
    filter.addClass('filter__inner-opened');
  });

  $(window).on('resize', function () {
    if($(window).outerWidth() > 767 && filter.hasClass('filter__inner-opened')) {
      filter.removeClass('filter__inner-opened');
    }
  });
}
