import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.scss';
import 'bootstrap';
import '../scss/index.scss';

$(document).ready(function() {
  $(function() {
    let elem = $('.main-slider-b__init');
    elem.slick({
      prevArrow: $('.main-slider-b__prev-btn'),
      nextArrow: $('.main-slider-b__next-btn'),
    });
  });
});