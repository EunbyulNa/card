//메뉴오버레이//
$(document).ready(function () {

  $('.menu_btn>a').on('click', function() {
   $('#overlay_wraps').fadeIn()
 }),


//오버레이 되면 스크롤 다운 막기//
 $('#overlay_wraps').on('scroll touchmove mousewheel', function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
});

 $('.close_btn>a').on('click', function () {
   $('#overlay_wraps').fadeOut()
 });


//사이드메뉴//

$(window).scroll(function() {

  var height = $(document).scrollTop();
  //console.log(height);

   if(height > '900' && height < '2760') {
     $('.right_contents').addClass('fixedP');
   }else {
     $('.right_contents').removeClass('fixedP');
   }

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

 //탭박스//
 $('.tab_box div:gt(0)').hide();

 var nn;

 $('.tab li').click(function() {

   nn = $(this).index();

   $('.tab li').removeClass('select');
   $(this).addClass('select');
   $('.tab li').removeClass('redB');
   $(this).addClass('redB');

   $('.tab_box div').hide();
   $('.tab_box div').eq(nn).show();
 });



//탭박스 애니메이션//

$('.tab_txt').on('mouseover',function () {
  $(this).find('.all_txt').stop().animate({'top':'220px'},'easeOutQuart')
}).on('mouseout', function() {
  $(this).find('.all_txt').stop().animate({'top':'520px'},'easeOutQuart' )
})

});
