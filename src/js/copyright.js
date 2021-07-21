const d = new Date();
const year = d.getFullYear();
const copyRight = `©︎ Copyright ${year} SHIMAchang All right reserved`;
const $copyright = $('.copyright');

if ($copyright.length) {
  console.log('yes copyright');
  $('.copyright').append(`<P>${copyRight}</P>`);
} else {
  console.log('not copyright');
}
