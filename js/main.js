$(document).ready(function () {
  //!4 hamburger mobile
  let menu = $('.menu__mobile')
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
    prevArrow: $('.services__mobile .sliderBtn_container.left'),
    nextArrow: $('.services__mobile .sliderBtn_container.right'),
  })

  //!4 slick slider mobile SERVICES

  $('#technologiesSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: $('.technologies__mobile .sliderBtn_container.left'),
    nextArrow: $('.technologies__mobile .sliderBtn_container.right'),
  })
  //!4 slick slider mobile HOWTO

  $('#howToSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: $('.howTo__mobile .sliderBtn_container.left'),
    nextArrow: $('.howTo__mobile .sliderBtn_container.right'),
  })
})


//!btn onclick scrolling START
let sectionContacts = document.getElementById('contacts')
let form = document.getElementById('form')

let menuDesktopBtnContactUs = document.getElementById('menu__desktop_btnContactUs')
let menuDesktopBtnJoinHydra = document.getElementById('menu__desktop_btnJoinHydra')

let menuMobileBtnContactUs = document.getElementById('menu__mobile_btnContactUs')
let menuMobileBtnJoinHydra = document.getElementById('menu__mobile_btnJoinHydra')

function scrollToAnchor(anchorElement) {
  anchorElement.scrollIntoView({block: "start", behavior: "smooth"})
}

menuDesktopBtnContactUs.addEventListener("click", function () {
  scrollToAnchor(sectionContacts)});
menuMobileBtnContactUs.addEventListener("click", function () {
  scrollToAnchor(sectionContacts)});

  menuDesktopBtnJoinHydra.addEventListener("click", function () {
    scrollToAnchor(form)});
  menuMobileBtnJoinHydra.addEventListener("click", function () {
    scrollToAnchor(form)});


//!btn onclick scrolling END

//todo temp form prevent default
let submitBtn = document.getElementById('formSubmit')

submitBtn.addEventListener('click', function (e) {
  e.preventDefault()
})