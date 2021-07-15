if($('a[href^="#"]').length) {
  $(document).on('click', 'a[href^="#"]', () => {
    const ADJUST = -80;
    const SPEED = 400;
    const HEIGHT = $('#contactAnchor').offset().top + ADJUST;
    $('body,html').animate({ scrollTop: HEIGHT }, SPEED, 'swing');
    return false;
  });
}
