// Использовалась библиотека https://swiperjs.com/

import Swiper from 'swiper/bundle';

$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container-one', {
    // Optional parameters
    loop: true,
    navigation: {
      nextEl: '.next-one',
      prevEl: '.prev-one',
    },
    speed: 500,
    pagination: {
      el: '.swiper-pagination-one',
      clickable: true,
    },
   // autoplay:{
     // delay: 3000
   // },
  })

  var mySwiper = new Swiper ('.swiper-container-two', {
    // Optional parameters
    loop: true,
    navigation: {
      nextEl: '.next-two',
      prevEl: '.prev-two',
    },
    speed: 500,
    pagination: {
      el: '.swiper-pagination-two',
    },
   // autoplay:{
     // delay: 3000
   // },
  })

  var mySwiper = new Swiper ('.swiper-container-three', {
    // Optional parameters
    loop: true,
    navigation: {
      nextEl: '.next-three',
      prevEl: '.prev-three',
    },
    speed: 500,
    pagination: {
      el: '.swiper-pagination-three',
    },
   // autoplay:{
     // delay: 3000
   // },
  })

  var mySwiper = new Swiper ('.swiper-container-four', {
    // Optional parameters
    loop: true,
    navigation: {
      nextEl: '.next-four',
      prevEl: '.prev-four',
    },
    speed: 500,
    pagination: {
      el: '.swiper-pagination-four',
    },
   // autoplay:{
     // delay: 3000
   // },
  })
  
  var mySwiper = new Swiper ('.swiper-container-five', {
    // Optional parameters
    loop: true,
    navigation: {
      nextEl: '.next-five',
      prevEl: '.prev-five',
    },
    speed: 500,
    pagination: {
      el: '.swiper-pagination-five',
    },
   // autoplay:{
     // delay: 3000
   // },
  })
});
