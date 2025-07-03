// fullpage.js
new fullpage('#fullpage', {
  sectionSelector: '.section',
  scrollOverflow: false,
  navigation: false,
  scrollingSpeed: 1000,
  parallax: true,
  autoScrolling: true,
  fitToSection: true,

  onLeave: function (origin, destination, direction) {
    const mainHeader = document.querySelector('.main_header_dark');
    const detailHeader = document.querySelector(
      '.history_detail_header.notice_header'
    );

    if (destination.index === 1) {
      gsap.to(mainHeader, {
        opacity: 0,
        visibility: 'hidden',
        zIndex: 999,
        duration: 0.5,
        ease: 'power2.inOut',
      });
      gsap.to(detailHeader, {
        opacity: 1,
        visibility: 'visible',
        zIndex: 1000,
        duration: 0.5,
        ease: 'power2.inOut',
      });
    } else {
      gsap.to(mainHeader, {
        opacity: 1,
        visibility: 'visible',
        zIndex: 1000,
        duration: 0.5,
        ease: 'power2.inOut',
      });

      gsap.to(detailHeader, {
        opacity: 0,
        visibility: 'hidden',
        zIndex: 999,
        duration: 0.5,
        ease: 'power2.inOut',
      });
    }
  },
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
