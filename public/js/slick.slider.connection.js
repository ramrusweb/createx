$(function() {
  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    waitForAnimate: false
  })
  // prev slide
  $('.team__slider-prev').on('click', function(e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })
  // next slide
  $('.team__slider-next').on('click', function(e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })
}) 