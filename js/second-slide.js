"use strict";

$(document).ready(function(){
  $('.second-slide').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 4000,
  });
});