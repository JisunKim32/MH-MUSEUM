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
