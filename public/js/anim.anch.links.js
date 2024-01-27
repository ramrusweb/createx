$(document).ready(function (){
  $('.header__nav-list a, .header__top-btn, .footer__go-top, .header__content-btn, .about__btn, .footer__top-list a').on('click', function(e) {
    e.preventDefault()
    let id = $(this).attr('href'),
    top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 800)
  })
})