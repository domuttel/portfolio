
$(document).on('ready', function(){
  $('.projects').bxSlider({
    slideWidth: 250,
    // slideHeight: 5,
    controls: false,
    minSlides: 3,
    maxSlides: 3,
    slideMargin: 50,
    // adaptiveHeight: false
    // responsive: true
  });

$( "#about-me > h4:nth-child(1)" ).css( "color:black;" );

});



  var slider = $('.page-titles').bxSlider({
    mode: 'horizontal',
    pager: false,
    controls: false,
    moveSlides: 3
    // useCSS: true,
    // responsive: true,
  });
  $('#web').click(function(){
    slider.goToSlide(1);
    return false;
  });
  $('#design').click(function(){
    slider.goToSlide(2);
    return false;
  });
  $('#art').click(function(){
    slider.goToSlide(3);
    return false;
  });
  $('#name').click(function(){
    slider.goToSlide(0);
    return false;
  });



