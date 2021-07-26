import barba from '@barba/core';
import barbaCss from '@barba/css';
barba.use(barbaCss);

// titleタグ以外のmetaタグの情報の書き換えを行う
const replaceHeadTags = (target) => {
  const head = document.head;
  const targetHead = target.html.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0];
  const newPageHead = document.createElement('head');
  newPageHead.innerHTML = targetHead;
  const removeHeadTags = ["meta[property^='og']", "meta[name^='twitter']"].join(
    ','
  );
  const headTags = [...head.querySelectorAll(removeHeadTags)];
  headTags.forEach((item) => {
    head.removeChild(item);
  });
  const newHeadTags = [...newPageHead.querySelectorAll(removeHeadTags)];
  newHeadTags.forEach((item) => {
    head.appendChild(item);
  });
};

//Googleアナリティクスに送信
const gaPush = () => {
  if (typeof gtag === 'function') {
    gtag('config', 'G-WK9GR62C5Y', { page_path: location.pathname });
  }
};
//TODO: 採用検討中
//const $mask = $('.barbaMask');

function copyright() {
  const d = new Date();
  const year = d.getFullYear();
  const copyRight = `©︎ Copyright ${year} SHIMAchang All right reserved`;
  const $copyright = $('.copyright');

  $copyright.append(`<P>${copyRight}</P>`);
}

barba.init({
  sync: true,
  transitions: [
    {
      async leave() {
        leaveAnimation();
        pageTransition();
        await delay(100);
      },
      //TODO: 採用検討中
      // async afterLeave() {
      //   $mask.addClass('active');
      //   await new Promise(resolve => {
      //     return setTimeout(resolve, 100);
      //   });
      // },
      // afterEnter() {
      //   $mask.removeClass('active');
      // },
      afterLeave() {
        $('html, body').scrollTop(0);
      },
      enter({ next }) {
        copyright();
        replaceHeadTags(next);
        gaPush();
      },
    },
  ],
  views: [
    {
      namespace: 'other',
      afterEnter() {
        const otherPageShow = () => {
          document.querySelector('.title').classList.add('show');
          const showImage = () => {
            document.querySelector('.image').classList.add('show');
          };
          setTimeout(showImage, 500);
        };
        copyright();
        otherPageShow();
      },
    },
    {
      namespace: 'top',
      afterEnter() {
        copyright();
      },
    },
  ],
});

//同じurlの場合、ページ遷移をさせない
const eventDelete = (e) => {
  if (e.currentTarget.href === window.location.href) {
    e.preventDefault();
    e.stopPropagation();
  }
};
const links = [...document.querySelectorAll('a[href]')];
links.forEach((link) => {
  link.addEventListener(
    'click',
    (e) => {
      eventDelete(e);
      if ($('#menuButton, #nav, #mask').hasClass('active')) {
        $('#menuButton, #nav, #mask').removeClass('active');
      }
    },
    false
  );
});
