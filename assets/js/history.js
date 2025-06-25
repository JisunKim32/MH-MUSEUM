// // fullpage.js
// new fullpage('#fullpage', {
//    sectionSelector: '.section',
//    scrollOverflow: false,
//    navigation: false,
//    scrollingSpeed: 1000,
//    parallax: true,
//    autoScrolling: true,
//    fitToSection: true,
//    // Optional
//    menu: '#menu',
//    anchors: ['firstPage', 'secondPage', 'thirdPage', 'footerPage'],
//  });


//  let swiper = new Swiper(".mySwiper", {
//    slidesPerView: 3,
//    spaceBetween: 40,
//    freeMode: true,
//    pagination: {
//      el: ".swiper-pagination",
//      clickable: true,
//    },
//    navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//       0: {
//         slidesPerView: 3,
//         spaceBetween: 26,
//       },
//       576: {
//         slidesPerView: 3,
//         spaceBetween: 26,
//       },
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 30,
//       },
//       992: {
//         slidesPerView: 2,
//         spaceBetween: 30,
//       },
//       1200: {
//         slidesPerView: 2.7,
//         spaceBetween: 30,
//       },
//       1400: {
//         slidesPerView: 2.78,
//         spaceBetween: 30,
//       },
//       1580: {
//         slidesPerView: 3,
//         spaceBetween: 40,
//       },
//     },
//  });


//  === history-select js ===
$(function() {
  // === 상태 변수 ===
  let currentStep = 0; // 0: 2000-2009, 1: 2010-2020
  let isAnimating = false; // 애니메이션/섹션이동 중복 실행 방지 플래그
  const transitionCooldown = 1200; // 섹션 이동 후 스크롤을 막아둘 시간 (ms)

  // === fullpage.js 초기화 ===
  new fullpage('#fullpage', {
      sectionSelector: '.section',
      scrollOverflow: false,
      navigation: false,
      scrollingSpeed: 1000,
      autoScrolling: true,
      fitToSection: true,
      anchors: ['history', 'footer'],
      // onLeave를 사용하지 않고 wheel 이벤트로 모든 것을 직접 제어합니다.
  });

  // === 마우스 휠 이벤트 리스너를 #fullpage 전체에 적용 ===
  document.getElementById('fullpage').addEventListener('wheel', function(event) {
      // 제어 플래그: 애니메이션/섹션이동 중에는 아무것도 하지 않음
      if (isAnimating) {
          event.preventDefault();
          event.stopPropagation();
          return;
      }

      const activeSectionAnchor = fullpage_api.getActiveSection().anchor;
      const delta = event.deltaY;

      // --- 1. 'history' 섹션에 있을 때의 로직 ---
      if (activeSectionAnchor === 'history') {
          if (delta > 0) { // 아래로 스크롤
              if (currentStep === 0) {
                  // 요구사항 1: 2000년대 -> 2010년대 전환
                  event.preventDefault();
                  event.stopPropagation(); // 이벤트 전파를 막아 fullPage.js의 기본 동작을 완벽히 차단
                  isAnimating = true;
                  currentStep = 1;
                  switchHistoryStep(1, () => { isAnimating = false; });
              } else { // currentStep === 1
                  // 요구사항 2: 2010년대 -> 푸터로 이동
                  isAnimating = true;
                  fullpage_api.moveSectionDown();
                  // 섹션이 이동하는 동안 추가 스크롤을 막기 위해 잠시 대기
                  setTimeout(() => { isAnimating = false; }, transitionCooldown);
              }
          } else { // 위로 스크롤 (delta < 0)
              if (currentStep === 1) {
                  // 요구사항 4: 2010년대 -> 2000년대 전환
                  event.preventDefault();
                  event.stopPropagation(); // 이벤트 전파 차단
                  isAnimating = true;
                  currentStep = 0;
                  switchHistoryStep(0, () => { isAnimating = false; });
              }
          }
      }
      // --- 2. 'footer' 섹션에 있을 때의 로직 ---
      else if (activeSectionAnchor === 'footer') {
          if (delta < 0) { // 위로 스크롤
              // 요구사항 3: 푸터 -> history 섹션(2010년대 화면)으로 이동
              // currentStep은 이미 '1'이므로 상태를 바꿀 필요 없이 섹션만 이동
              isAnimating = true;
              fullpage_api.moveSectionUp();
              setTimeout(() => { isAnimating = false; }, transitionCooldown);
          }
      }
  });


  // === Swiper 초기화 ===
  const commonNavigation = {
      nextEl: ".main-content .swiper-button-next",
      prevEl: ".main-content .swiper-button-prev",
  };
  const swiper1 = new Swiper(".swiper01", { slidesPerView: 3, spaceBetween: 40, navigation: commonNavigation });
  const swiper2 = new Swiper(".swiper02", { slidesPerView: 3, spaceBetween: 40, navigation: commonNavigation });


  // === GSAP 애니메이션 함수 (콜백 기능 포함) ===
  function switchHistoryStep(step, onCompleteCallback) {
      const title1 = '.content-title.title01';
      const title2 = '.content-title.title02';
      const swiperContainer1 = '.swiper.swiper01';
      const swiperContainer2 = '.swiper.swiper02';
      
      const tl = gsap.timeline({
          onComplete: onCompleteCallback
      });

      if (step === 0) { // 2010 -> 2000
          tl.to([title2, swiperContainer2], { opacity: 0, pointerEvents: 'none', duration: 0.4 });
          tl.to([title1, swiperContainer1], { opacity: 1, pointerEvents: 'auto', duration: 0.4 }, "<");
      } else { // 2000 -> 2010
          tl.to([title1, swiperContainer1], { opacity: 0, pointerEvents: 'none', duration: 0.4 });
          tl.to([title2, swiperContainer2], { opacity: 1, pointerEvents: 'auto', duration: 0.4 }, "<");
      }
  }
});