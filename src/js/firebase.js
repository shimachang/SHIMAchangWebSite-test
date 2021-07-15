import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firebase-firestore';

//メールフォーム
const firebaseConfig = {
  apiKey: 'AIzaSyBH46vXp84fifEdIN3C0Q03eQtR320BedM',
  authDomain: 'shimachangwebsite-e91d1.firebaseapp.com',
  databaseURL: 'https://shimachangwebsite-e91d1-default-rtdb.firebaseio.com',
  projectId: 'shimachangwebsite-e91d1',
  storageBucket: 'shimachangwebsite-e91d1.appspot.com',
  messagingSenderId: '128547544004',
  appId: '1:128547544004:web:6dcb8f58cea7120b446291',
  measurementId: 'G-WK9GR62C5Y',
};
firebase.initializeApp(firebaseConfig);
firebase.analytics().logEvent('notification_received');

const firestore = firebase.firestore();
const db = firestore.collection('formData');
const confirmBtn = document.querySelector('.contactForm');

//Click Contactform
const emailValue = $('#inputEmail').val();
const nameValue = $('#inputName').val();
const messageValue = $('#inputMessage').val();
const confirmValue = $('#inputConfirm').val();

$(function() {
  $('.confirmBtn').prop("disabled", true);

  //入力欄の操作時
  $('.contactForm').on('change', function() {
      //必須項目が空かどうかフラグ
      let flag = true;
      //必須項目をひとつずつチェック
      $('.contactForm input textarea').each(function(e) {
          //もし必須項目が空なら
          if ($('.contactForm input textarea').eq(e).val() === "") {
              flag = false;
          }
      });
      //全て埋まっていたら
      if (flag) {
          //送信ボタンを復活
          $('.confirmBtn').prop("disabled", false);
      }
      else {
          //送信ボタンを閉じる
          $('.confirmBtn').prop("disabled", true);
      }
  });
});

$(document).on('submit', '.contactForm', (e) => {
  e.preventDefault();

  const emailValue = $('#inputEmail').val();
  const nameValue = $('#inputName').val();
  const messageValue = $('#inputMessage').val();
  const confirmValue = $('#inputConfirm').val();
  $('#name').text(nameValue);
  $('#email').text(emailValue);
  $('#message').text(messageValue);

  if (!nameValue) {
    $('.helperText' + '.name').text('名前を入力して下さい');
  }
  if (!emailValue) {
    $('.helperText' + '.email').text('メールアドレスを入力して下さい');
  }
  if (!emailValue !== confirmValue) {
    $('.helperText' + '.confirm').text('メールアドレスを確認して下さい');
  }
  if (!messageValue) {
    $('.helperText' + '.message').text('お問い合わせ内容を入力して下さい');
  }
  if (emailValue === confirmValue && nameValue && messageValue) {
    $('#modalArea').fadeIn();
  }

});

//click modal
$(document).on('click', '#contactBtn', () => {
  const nameValue = $('#inputName').val();
  const emailValue = $('#inputEmail').val();
  const messageValue = $('#inputMessage').val();

  //send data to firebase
  db.doc()
    .set({
      name: nameValue,
      email: emailValue,
      message: messageValue,
      created: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log('Data saved');
    })
    .catch(() => {
      console.log('error');
    });
  confirmBtn.reset();

  $('#modalArea').fadeOut();
  $('#sendedArea').fadeIn();
});

$(document).on('click', '#closeModal, #modalBg', () => {
  $('#modalArea').fadeOut();
});
$(document).on('click', '#close, #sendedBg', () => {
  $('#sendedArea').fadeOut();
});
