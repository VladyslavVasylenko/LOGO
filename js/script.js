"use strict";

$(document).ready(function(){
  $('.main-slide').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 4000,
  });
});