// fullpage.js
new fullpage('#fullpage', {
   sectionSelector: '.section',
   scrollOverflow: false,
   navigation: false,
   // 아래 옵션 추가: 이 섹션에서는 일반 스크롤 허용
   scrollingSpeed: 1000,
   // 스크롤 속도
   // responsiveWidth: 900,
   // 해당 크기 일 때 autoScroll 비활성화
   parallax: true,
   // 작은 화면에서 부드러운 스크롤링
   autoScrolling: true,
   fitToSection: true,
   // normalScrollElements: '.section-normal'
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
 });