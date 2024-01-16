$(function() {
  // team slider
  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true
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

  //testimonials slider
  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.testimonials__dots')
  })

  // prev slide
  $('.testimonials__prev').on('click', function(e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })
  // next slide
  $('.testimonials__next').on('click', function(e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })
}) 