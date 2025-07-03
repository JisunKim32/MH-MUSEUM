const menuWraps = document.querySelectorAll('.menu-wrap');
const menuOverlay = document.querySelector('.menu_overlay');
const mobileNav = document.querySelector('.nav_menu.mobile-nav');
const body = document.body;

// 메뉴를 여는 함수
function openMenu() {
  // 모든 햄버거 버튼에 'open' 클래스를 추가하여 열린 상태를 표시
  menuWraps.forEach((wrap) => wrap.classList.add('open'));
  // 메뉴 오버레이에 'active' 클래스를 추가하여 보이게 함
  menuOverlay.classList.add('active');
  // 스크롤 방지
  body.style.overflow = 'hidden';
}

// 메뉴를 닫는 함수
function closeMenu() {
  // 모든 햄버거 버튼에서 'open' 클래스를 제거하여 닫힌 상태를 표시
  menuWraps.forEach((wrap) => wrap.classList.remove('open'));
  // 메뉴 오버레이에서 'active' 클래스를 제거하여 숨김
  menuOverlay.classList.remove('active');
  // 스크롤 허용
  body.style.overflow = '';
}

menuWraps.forEach((menuWrap) => {
  menuWrap.addEventListener('click', (event) => {
    event.stopPropagation();

    if (menuOverlay.classList.contains('active')) {
      closeMenu(); // 열려있으면 메뉴 닫기
    } else {
      openMenu(); // 닫혀있으면 메뉴 열기
    }
  });
});

document.addEventListener('click', (event) => {
  // 메뉴 오버레이가 현재 열려있는 상태일 때만 작동
  if (menuOverlay.classList.contains('active')) {
    let clickedInsideMenuWrap = false;
    // 클릭된 요소가 어떤 햄버거 버튼 안에 있는지 확인
    menuWraps.forEach((wrap) => {
      if (wrap.contains(event.target)) {
        clickedInsideMenuWrap = true;
      }
    });

    // 클릭된 요소가 햄버거 버튼(menuWrap) 내부도 아니고, 모바일 메뉴(mobileNav) 내부도 아닐 때
    if (!clickedInsideMenuWrap && !mobileNav.contains(event.target)) {
      closeMenu(); // 메뉴 닫기
    }
  }
});

let prevScroll = window.pageYOffset;
const header = document.querySelector('.scroll_ani');

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > prevScroll && currentScroll > 80) {
    // 스크롤 내릴 때 헤더 숨기기
    header.classList.remove('show');
    header.classList.add('hide');
  } else {
    // 스크롤 올릴 때 헤더 보이기
    header.classList.remove('hide');
    header.classList.add('show');
  }

  prevScroll = currentScroll;
});

document.addEventListener('DOMContentLoaded', function () {
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
