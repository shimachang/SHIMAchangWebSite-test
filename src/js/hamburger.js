const $menuButton = $('#menuButton');
const $nav = $('#nav');
const $mask = $('#mask');
function toggleMenu() {
  $menuButton.toggleClass('active');
  $nav.toggleClass('active');
  $mask.toggleClass('active');
}

$(document).on('click', function (e) {
  if ($(e.target).closest($menuButton).length) {
    toggleMenu();
  } else if (
    $menuButton.hasClass('active') &&
    !$(e.target).closest($menuButton).lingth
  ) {
    toggleMenu();
  }
});
