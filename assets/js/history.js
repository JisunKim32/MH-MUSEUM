// fullpage.js
new fullpage('#fullpage', {
   sectionSelector: '.section',
   scrollOverflow: false,
   navigation: false,
   scrollingSpeed: 1000,
   parallax: true,
   autoScrolling: true,
   fitToSection: true,
   // Optional
   menu: '#menu',
   anchors: ['firstPage', 'secondPage', 'thirdPage', 'footerPage'],

//    afterLoad: function(origin, destination, direction){
//     let menu = document.getElementById('menu');

//     // 푸터 섹션의 앵커 이름을 'footerPage'로 가정
//     if(destination.anchor == 'footerPage'){
//         // 푸터 섹션일 때 메뉴 숨기기 (예시)
//         menu.style.opacity = '0';
//         menu.style.visibility = 'hidden';
//     } else {
//         // 다른 섹션일 때 메뉴 다시 보이기
//         menu.style.opacity = '1';
//         menu.style.visibility = 'visible';
//     }
// }
 });


 let swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,
   spaceBetween: 40,
   freeMode: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 26,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 26,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2.7,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 2.78,
        spaceBetween: 30,
      },
      1580: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
 });