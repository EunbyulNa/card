//메뉴오버레이//
$(document).ready(function () {

  $('.menu_btn>a').on('click', function() {
   $('#overlay_wraps').fadeIn()
 }),
 $('.close_btn>a').on('click', function () {
   $('#overlay_wraps').fadeOut()
 });










 //슬라이더//
 var imgNumber = $('.sliders li').length;
 $('.sliders ul').css({'width':imgNumber*1200});

 setInterval(function(){

   $('.sliders ul').animate({'margin-left':'-1200px'},900,'swing',function(){

       $('.sliders ul').find('li:first-child').insertAfter($('.sliders ul').find('li:last-child'));
       $('.sliders ul').css({'margin-left':'0'});

   });

 },2000);

});
