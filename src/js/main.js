const $ = require('jquery');

// ハンバーガーメニュー
$('#menuButton').on('click', () => {
  $('#menuButton').toggleClass('active');
  $('#nav').toggleClass('active');
  $('#mask').toggleClass('active');
});

// ハンバーガー 指定領域以外をクリック
document.addEventListener('click', (e) => {
  if (!e.target.closest('#navi') && !e.target.closest('#menuButton')) {
    menuButton.classList.remove('active');
    nav.classList.remove('active');
    mask.classList.remove('active');
  }
});

//背景画像スクロール
  $(window).on('scroll', () => {
    let scrollTop = $(window).scrollTop();
    let bgPosition = scrollTop / 3.8;

    if (bgPosition){
      $('.main-image').css('background-position', 'center top -'+ bgPosition + 'px');
    }
  });

//スクロールしたらmain-containerの表示非表示
  window.addEventListener('scroll', () => {
    const container = document.getElementById('main-container')
    let scroll = document.documentElement.scrollTop;

    if (scroll > 150) {
      container.classList.add('hide');
    } else if(scroll < 150){
      container.classList.remove('hide');
    }
  });

//ロード画面
window.onload = () => {
  const loader = document.getElementById('loader-bg');
  loader.classList.add('loaded');
}

//トップページフェードイン
window.addEventListener('scroll', () => {
  const targetElement = document.querySelectorAll('.second-container');
  for(let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight * .6
    if(window.innerHeight > getElementDistance) {
      targetElement[i].classList.add('show');
    } else if(window.innerHeight < getElementDistance) {
      targetElement[i].classList.remove('show');
    }
  }
});

//他のページフェードイン
window.addEventListener('scroll', () => {
  const otherTargetElement = document.querySelectorAll('.content');
  for(let i = 0; i < otherTargetElement.length; i++) {
    const getElementDistance = otherTargetElement[i].
    getBoundingClientRect().top + otherTargetElement[i].clientHeight * .6
    if(window.innerHeight > getElementDistance) {
      otherTargetElement[i].classList.add('show');
    } else if(window.innerHeight < getElementDistance) {
      otherTargetElement[i].classList.remove('show');
    }
  }
});

//一文字ずつアニメーション
const animationTarget = document.querySelectorAll('.animationNode');
for (let i = 0; i < animationTarget.length; i++) {
  const target = animationTarget[i],
        texts = target.textContent,
        textsArray = [];

  target.textContent = "";

  for (let j = 0; j < texts.split("").length; j++) {
    const txt = texts.split("")[j];
    if (txt === " ") {
      textsArray.push(" ")
    } else {
      textsArray.push('<span style="animation-delay: ' + (j * .1) + 's;">' + txt + '</span>')
    }
  }

  for (let k = 0; k < textsArray.length; k++) {
    target.innerHTML += textsArray[k]
  }
}

 //メールフォーム
  const firebaseConfig = {
    apiKey: "AIzaSyBH46vXp84fifEdIN3C0Q03eQtR320BedM",
    authDomain: "shimachangwebsite-e91d1.firebaseapp.com",
    databaseURL: "https://shimachangwebsite-e91d1-default-rtdb.firebaseio.com",
    projectId: "shimachangwebsite-e91d1",
    storageBucket: "shimachangwebsite-e91d1.appspot.com",
    messagingSenderId: "128547544004",
    appId: "1:128547544004:web:6dcb8f58cea7120b446291",
    measurementId: "G-WK9GR62C5Y"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics().logEvent('notification_received');

  const firestore = firebase.firestore();
  const db = firestore.collection("formData");
  const confirmBtn =  document.querySelector('.contactForm');

  //Click Contactform
  $(document).on('submit', '.contactForm', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const inputName = document.getElementById('inputName').value;
    const inputEmail = document.getElementById('inputEmail').value;
    const inputMessage = document.getElementById('inputMessage').value;

    name.textContent = inputName;
    email.textContent = inputEmail;
    message.textContent = inputMessage;
    if ($('#inputEmail').val() !== $('#inputConfirm').val()) {
      alert('メールアドレスが正しくありません');
    }
    if ($('#inputName').val() === '') {
      alert('名前を入力して下さい');
    }
    if ($('#inputEmail').val() === '') {
      alert('メールアドレスを入力して下さい');
    }
    if ($('#inputMessage').val() === '') {
      alert('お問い合わせ内容を入力してください');
    }
    if ($('#inputEmail').val() === $('#inputConfirm').val()
      && $('#inputName').val() !== ''
      && $('#inputMessage').val() !== ''
    ) {
      $('#modalArea').fadeIn();
    }
  });

  //click modal
  $(document).on('click', '#contactBtn',() => {
    const inputName = document.getElementById('inputName').value;
    const inputEmail = document.getElementById('inputEmail').value;
    const inputMessage = document.getElementById('inputMessage').value;

    //send data to firebase
    db.doc().set({
      name: inputName,
      email: inputEmail,
      message: inputMessage,
      created: firebase.firestore.FieldValue.serverTimestamp()
    }).then( () => {
      console.log("Data saved")
    }).catch( (error) => {
      console.log(error);
    });
    confirmBtn.reset();

    $('#modalArea').fadeOut();
    $('#sendedArea').fadeIn();
  });

  $(document).on('click', '#closeModal, #modalBg', () => {
    $('#modalArea').fadeOut();
  })
  $(document).on('click', '#close, #sendedBg', () => {
    $('#sendedArea').fadeOut();
  })

  //barba
import barba from '@barba/core';
import barbaCss from '@barba/css';
barba.use(barbaCss)

// titleタグ以外のmetaタグの情報の書き換えを行う
const replaceHeadTags = target => {
  const head = document.head;
  const targetHead = target.html.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0];
  const newPageHead = document.createElement('head');
  newPageHead.innerHTML = targetHead;
  const removeHeadTags = [
    "meta[name='keywords']",
    "meta[name='description']",
    "meta[property^='fb']",
    "meta[property^='og']",
    "meta[name^='twitter']",
    "meta[name='robots']",
    'meta[itemprop]',
    'link[itemprop]',
    "link[rel='prev']",
    "link[rel='next']",
    "link[rel='canonical']",
  ].join(',');
  const headTags = [...head.querySelectorAll(removeHeadTags)];
  headTags.forEach(item => {
    head.removeChild(item);
  });
  const newHeadTags = [...newPageHead.querySelectorAll(removeHeadTags)];
  newHeadTags.forEach(item => {
    head.appendChild(item);
  });
};

//Googleアナリティクスに送信
const gaPush = () => {
  if (typeof gtag === 'function') {
    gtag('config', 'G-WK9GR62C5Y', {'page_path': location.pathname});
  }
}

barba.init({
  sync: true,
  transitions: [
    {
      async leave () {
        const done = this.async();
        leaveAnimation();
        pageTransition();
        await delay(1000);
        done();
      },
      beforeEnter ({ next }) {
        replaceHeadTags(next);
        $('html, body').scrollTop(0);
        gaPush();
      },
    }
  ],
  views: [
    {
      namespace: 'other',
      afterEnter () {
        const otherPageShow = () => {
          document.querySelector('.title').classList.add('show');
          const showImage = () => {
          document.querySelector('.image').classList.add('show');
          }
          setTimeout(showImage, 500);
        }
        otherPageShow();
      }
    }
  ]
});

//同じurlの場合、ページ遷移をさせない
const eventDelete = e => {
  if (e.currentTarget.href === window.location.href) {
    e.preventDefault()
    e.stopPropagation()
    return
  }
}
const links = [...document.querySelectorAll('a[href]')]
links.forEach(link => {
  link.addEventListener('click', e => {
    eventDelete(e)
  }, false)
})

 //アンカーリンク
if($('a[href^="#"]').length) {
    $(document).on('click', 'a[href^="#"]', function(){
    var adjust = -80;
    var speed = 400;
    let height = $('#contactAnchor').offset().top + adjust
    $('body,html').animate({scrollTop:height}, speed, 'swing');
    console.log(height);
    return false;
  })
};

//トップへ戻るボタン
$('.topBtn').hide();
$(window).on('scroll', function() {
  let docHeight = $(document).innerHeight();
  let winHeight = $(window).innerHeight();
  let bottom = docHeight - winHeight;

  if($(this).scrollTop() > 200 ) {
    $('.topBtn').fadeIn();
  }else {
    $('.topBtn').fadeOut();
  }
//スクロール表示非表示
  if(bottom <= $(window).scrollTop()) {
    $('.scroll').fadeOut()
  } else {
    $('.scroll').fadeIn()
  }
})
$(document).on('click', '.topBtn', function() {
  $('body,html').animate({
    scrollTop: 0
  }, 500)
})
