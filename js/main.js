
$(document).on('ready', function(e){

  // $('#web-projects','#art-projects','#design-projects').bxSlider({
  //   mode: 'horizontal',
  //   useCSS: true,
  //   minSlides: 3,
  //   maxSlides: 3,
  //   slideWidth: 360,
  //   slideMargin: 10
  // });

  var slider = $('.page-titles').bxSlider({
    mode: 'horizontal',
    pager: false,
  });

  $('#web').click(function(e){
    slider.goToSlide(1);
    e.preventDefault();
    return false;
  });
  $('#design').click(function(e){
    slider.goToSlide(3);
    e.preventDefault();
    return false;
  });
  $('#art').click(function(e){
    slider.goToSlide(2);
    e.preventDefault();
    return false;
  });
  $('#name').click(function(e){
    slider.goToSlide(0);
    e.preventDefault();
    return false;
  });

  e.preventDefault();
});


