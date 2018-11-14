export default () => {
  var modal = $('.js-checkout-modal');
  var close = $('.js-checkout-modal-close');
  var open = $('.js-checkout-modal-open');

  close.click(function () {
    modal.hide();
    $("body").removeClass("is-fixed");
  });
  open.click(function () {
    modal.show();
    $("body").addClass("is-fixed");
  });

  $(window).click(function (event) {
    if(event.target === modal.get(0)){
      modal.hide();
      $("body").removeClass("is-fixed");
    }
  });
}
