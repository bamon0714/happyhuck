$(function($) {
    $('.bg-swicher').bgSwitcher({
        images:['images/bg1.jpg','images/bg2.jpg','images/bg3.jpg'],
        interval: 5000,
        loop: true
    });


  
  $('nav a[herf^="#]').click(function(){
    var adjust=0;
    var speed=400;
    var href=$(this).attr("href");
    var target=$(href == "#" || href == "" ? 'html' : href);
    $('body,html').animate({
        scrollTop: position
    }, speed, 'swing');
    return false;
    });





  $(window).scroll(function (){
      var targetElement = $('.fadein').offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if( scroll > targetElement - windowHeight + 200) {
      $('.fadein').css('opacity', '1');
      $('.fadein').css('transform','translateY(0)');
   });



   $('.slider').slick({
      arrows: false,
      autoplay: true,
      dots: true,
      centerMode:true,
      centerPadding:'20%'
   });



   $('.more-button').on('click',fuction() {
      if ($('.open-box').is(':hidden')) {
      $('.open-box').slideDown();
      $(this).text('close');
      $(this).css('background-color','#808080');
    } else{
      $('open-box').slideUp();
      $(this).text('more');
      $(this).css('background-color','#fabb51');
    }
   }); 

    $(".modal-button").modaal();


    
   });