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

barba.init({
  sync: true,
  transitions: [
    {
      async leave() {
        const done = this.async();
        leaveAnimation();
        pageTransition();
        await delay(1000);
        done();
      },
      beforeEnter({ next }) {
        replaceHeadTags(next);
        $('html, body').scrollTop(0);
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
        otherPageShow();
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
    },
    false
  );
});
