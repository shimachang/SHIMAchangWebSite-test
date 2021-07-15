//スクロールしたらシリーズ
$(window).on('scroll', () => {

  const targetEl = $('.second-container');
  const otherTargetEl = $('.content')
  function scrollFade(el) {

    for(let i = 0; i < el.length; i++) {
      const getElDistance =
        el[i].getBoundingClientRect().top +
        el[i].clientHeight * .6;
      if(window.innerHeight > getElDistance) {
        el[i].classList.add('show');
      } else if(window.innerHeight < getElDistance) {
        el[i].classList.remove('show');
      }
    }
  }
  scrollFade(targetEl);
  scrollFade(otherTargetEl);

  //main-containerの表示非表示
  const container = $('#main-container');
  let scroll = document.documentElement.scrollTop;

  if(scroll > 150) {
    container.addClass('hide');
  } else if(scroll < 150) {
    container.removeClass('hide');
  }

  //背景画像パララックス
  let scrollTop = $(window).scrollTop();
  let bgPosition = scrollTop / 3.8;

  if(bgPosition) {
    $('.main-image').css(
      'background-position',
      'center top -' + bgPosition + 'px'
    );
  }
});

//一文字ずつアニメーション
const animationTarget = document.querySelectorAll('.animationNode');
for (let i = 0; i < animationTarget.length; i++) {
  const target = animationTarget[i],
    texts = target.textContent,
    textsArray = [];

  target.textContent = '';

  for(let j = 0; j < texts.split('').length; j++) {
    const txt = texts.split('')[j];
    if(txt === ' ') {
      textsArray.push(' ');
    } else {
      textsArray.push(
        '<span style="animation-delay: ' + j * 0.1 + 's;">' + txt + '</span>'
      );
    }
  }

  for(let k = 0; k < textsArray.length; k++) {
    target.innerHTML += textsArray[k];
  }
}
