$(function(){
  //ハンバーガーメニューの開閉
$('.burger-btn').on('click',function(){
  $('.header-nav').fadeToggle(300);
  $('.burger-btn').toggleClass('cross');
  $('body').toggleClass('noscroll');
});
});

