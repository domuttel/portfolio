
$(document).on('ready', function(){
  $('#web-projects').bxSlider({
    slideWidth: 300,
    minSlides: 2,
    maxSlides: 2,
    slideMargin: 100
});

});

  var slider = $('.page-titles').bxSlider({
    mode: 'horizontal',
    pager: false,
    controls: false,
    useCSS: true,
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
