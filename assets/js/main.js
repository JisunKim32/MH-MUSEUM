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
});

document.addEventListener('DOMContentLoaded', function () {
  const logoLink = document.getElementById('logo-link');
  if (logoLink) {
    logoLink.addEventListener('click', function (e) {
      e.preventDefault();
      if (typeof fullpage_api !== 'undefined') {
        fullpage_api.moveTo(1);
      } else {
        document
          .getElementById('fullpage')
          ?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  // logo 누르면 첫번째 섹션으로 이동
  const topBtn = document.querySelector('.top_btn'); //

  if (topBtn) {
    topBtn.addEventListener('click', function (e) {
      e.preventDefault();
      if (typeof fullpage_api !== 'undefined') {
        fullpage_api.moveTo(1);
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    });
  }
});
// button 누르면 첫번째 섹션으로 이동
const menuWrap = document.querySelector('.menu-wrap');
const menuOverlay = document.querySelector('.menu_overlay');
const mobileNav = document.querySelector('.nav_menu.mobile-nav');
const body = document.body;

// 메뉴를 닫는 함수
function closeMenu() {
  menuWrap.classList.remove('open');
  menuOverlay.classList.remove('active');
  body.style.overflow = '';
}

menuWrap.addEventListener('click', (event) => {
  event.stopPropagation();

  menuWrap.classList.toggle('open');
  menuOverlay.classList.toggle('active');

  if (menuOverlay.classList.contains('active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
});

document.addEventListener('click', (event) => {
  if (menuOverlay.classList.contains('active')) {
    if (!menuWrap.contains(event.target) && !mobileNav.contains(event.target)) {
      closeMenu();
    }
  }
});
