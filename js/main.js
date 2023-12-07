$(document).ready(function () {
  //!4 hamburger
  let menu = $('.menu')
  let hamburgerBtn = $('.hamburger')
  hamburgerBtn.click(function () {
    $(this).toggleClass('open')
    if (hamburgerBtn.hasClass('open')) {
      menu.show(300)
    } else menu.hide(300)
  })

  menu.click(function () {
    hamburgerBtn.removeClass('open')
    menu.hide(300)
  })

  $(document).mouseup(function (e) {
    if (
      !menu.is(e.target) &&
      menu.has(e.target).length === 0 &&
      !hamburgerBtn.is(e.target) &&
      hamburgerBtn.has(e.target).length === 0
    ) {
      menu.hide(300)
      hamburgerBtn.removeClass('open')
    }
  })

  //!4 slick slider mobile CONTACTS

  $('#contactsSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    nextArrow: $('.contacts__sliderBtns.right'),
    prevArrow: $('.contacts__sliderBtns.left'),
  })

  //!4 slick slider mobile SERVICES

  $('#servicesSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: $('.services .sliderBtn_container.left'),
    nextArrow: $('.services .sliderBtn_container.right'),
  })

  //!4 slick slider mobile SERVICES

  $('#technologiesSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: $('.technologies .sliderBtn_container.left'),
    nextArrow: $('.technologies .sliderBtn_container.right'),
  })
  //!4 slick slider mobile HOWTO

  $('#howToSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: $('.howTo .sliderBtn_container.left'),
    nextArrow: $('.howTo .sliderBtn_container.right'),
  })
})
