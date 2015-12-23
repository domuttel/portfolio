
$(document).on('ready', function(){
  $('#web-projects').bxSlider({
    slideWidth: 200,
    minSlides: 3,
    maxSlides: 3,
    slideMargin: 10
  });

  $("#demo01").animatedModal({
    modalTarget:'modal-02'
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
