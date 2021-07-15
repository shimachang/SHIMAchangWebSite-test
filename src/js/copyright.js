const d = new Date();
const year = d.getFullYear();
const copyRight = `©︎ Copyriget ${year} SHIMAchang All right reserved`;
const serchCopyright = $(document).hasClass('.copyright');

  if($(serchCopyright)) {
    $('.copyright').append(`<P>${copyRight}</P>`);
  }
