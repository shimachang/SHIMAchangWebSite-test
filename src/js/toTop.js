//トップへ戻るボタン
$(window).on('load resize', function () {
  const wid = $(window).width();
  if(wid >= 769) {
    $('.topBtn').hide();
    $(window).on('scroll', () => {
      const docHeight = $(document).innerHeight();
      const winHeight = $(window).innerHeight();
      const bottom = docHeight - winHeight;
      if($(this).scrollTop() > 200) {
        $('.topBtn').fadeIn();
      } else {
        $('.topBtn').fadeOut();
      }
      //スクロール表示非表示
      if(bottom <= $(window).scrollTop()) {
        $('.scroll').fadeOut();
      } else {
        $('.scroll').fadeIn();
      }
    });
  } else if(wid < 769) {
    $('.topBtn').hide();
    $('.scroll').hide();
  }
});
$(document).on('click', '.topBtn', () => {
  $('body,html').animate(
    {
      scrollTop: 0,
    },
    500
  );
});
