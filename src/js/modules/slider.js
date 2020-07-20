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
      clickable: true,
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
      clickable: true,
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
      clickable: true,
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
      clickable: true,
    },
   // autoplay:{
     // delay: 3000
   // }, 
  })

  // Слайдер с миниатюрами в карточке

  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });

  if (window.matchMedia("(max-width: 480px)").matches) {
    let mainList = $('.main__list');
    let list = $('.list-item');
    let listItem = $('.list-item li');

    let certificate = $('.certificate');
    let certificateList = $('.certificate ul');
    let certificateItem = $('.certificate ul li');

    let guarantee = $('.guarantee__slider');
    let guaranteeList = $('.guarantee__list');
    let guaranteeItem = $('.guarantee__list li');

    let catalog = $('.catalog__body');
    let catalogList = $('.equipment');
    let catalogItem = $('.equipment li');

    let MainCatalog = $('.catalog__content');
    let MainCatalogList = $('.equipment--catalog');
    let MainCatalogItem = $('.equipment--catalog li');

    let additionally = $('.additionally');
    let additionallyList = $('.additionally__list');
    let additionallyItem = $('.additionally__item');

    let createSliderMobile = function(container, wrapper, item) {
      container.addClass('swiper-container');
      wrapper.addClass('swiper-wrapper');
      item.addClass('swiper-slide');
    }

    createSliderMobile(mainList, list, listItem);
    createSliderMobile(certificate, certificateList, certificateItem);
    createSliderMobile(guarantee, guaranteeList, guaranteeItem);
    createSliderMobile(catalog, catalogList, catalogItem);
    createSliderMobile(MainCatalog, MainCatalogList, MainCatalogItem);
    createSliderMobile(additionally, additionallyList, additionallyItem);

    var mySwiper = new Swiper ('.swiper-container-one-mobile', {
      // Optional parameters
      loop: true,
      navigation: {
        nextEl: '.next-one-mobile',
        prevEl: '.prev-one-mobile',
      },
      speed: 500,
      pagination: {
        el: '.swiper-pagination-five',
        clickable: true,
      },
     // autoplay:{
       // delay: 3000
     // },
    })

    var mySwiper = new Swiper ('.swiper-container-two-mobile', {
      // Optional parameters
      loop: true,
      navigation: {
        nextEl: '.next-one-mobile-two',
        prevEl: '.prev-one-mobile-two',
      },
      speed: 500,
      pagination: {
        el: '.swiper-pagination-five',
        clickable: true,
      },
     // autoplay:{
       // delay: 3000
     // },
    })

    var mySwiper = new Swiper ('.swiper-container-three-mobile', {
      // Optional parameters
      loop: true,
      navigation: {
        nextEl: '.next-one-mobile-three',
        prevEl: '.prev-one-mobile-three',
      },
      speed: 500,
      pagination: {
        el: '.swiper-pagination-five',
        clickable: true,
      },
     // autoplay:{
       // delay: 3000
     // },
    })
  }
});


