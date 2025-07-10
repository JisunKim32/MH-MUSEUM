document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  const leftCards = document.querySelectorAll('.left-content-wrap');
  const textBlocks = document.querySelectorAll('.content-text');
  const leftContent = document.querySelector('.left-content');
  const rightContent = document.querySelector('.right-content');
  const footer = document.querySelector('.footer_main_content');

  // 1. 텍스트 블록에 맞춰 왼쪽 카드(이미지+제목)를 활성화하는 로직
  // 이 부분은 기존 로직을 그대로 사용합니다.
  textBlocks.forEach((block, i) => {
    ScrollTrigger.create({
      trigger: block,
      start: 'top center',
      end: 'bottom center',
      onToggle: (self) => {
        if (self.isActive) {
          leftCards.forEach((card, j) => {
            card.classList.toggle('active', i === j);
          });
        }
      },
    });
  });

  // 2. GSAP의 matchMedia를 사용하여 반응형 스크롤 애니메이션 구현
  // 화면 크기에 따라 다른 ScrollTrigger 설정을 적용합니다.
  ScrollTrigger.matchMedia({
    // 데스크톱 (lg 사이즈 이상)
    '(min-width: 1200px)': function () {
      ScrollTrigger.create({
        trigger: leftContent, // 고정할 대상
        start: 'top 158px', // 헤더 높이를 고려하여 시작점 설정
        endTrigger: rightContent, // 종료 시점의 기준이 될 요소
        end: 'bottom bottom', // rightContent의 하단이 뷰포트 하단에 닿으면 pin 해제
        pin: true, // leftContent를 고정
        pinSpacing: 'auto', // pin으로 인한 공간을 자동으로 계산하여 유지
      });
    },

    "(min-width: 992px) and (max-width: 1199px)": function() {
    ScrollTrigger.create({
      trigger: leftContent,
      start: 'top 130px', // 태블릿용 start 값 (예시)
      endTrigger: footer,
      end: 'top bottom',
      pin: true,
      pinSpacing: false, // md까지 column 레이아웃이라면 false 유지
    });
  },

    // 모바일 (md 사이즈 이하)
    '(max-width: 991px)': function () {
      ScrollTrigger.create({
        trigger: leftContent, // 고정할 대상
        start: 'top 80px', // 모바일 헤더 높이를 고려하여 시작점 설정
        endTrigger: footer, // 종료 시점의 기준이 될 요소 (푸터)
        end: 'top bottom', // 푸터의 상단이 뷰포트 하단에 닿으면 pin 해제
        pin: true, // leftContent를 고정
        pinSpacing: false, // 중요: column 레이아웃이므로 pin 공간을 만들지 않음
      });
    },
  });
});