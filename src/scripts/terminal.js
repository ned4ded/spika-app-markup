import 'bootstrap';

import checkoutModal from './_checkout-modal';
import filterToggle from './_filter-toggle';
import logIn from './_log-in';
import searchToggle from './_search-toggle';

$(document).ready(() => {
  checkoutModal();
  filterToggle();
  logIn();
  searchToggle();
});
