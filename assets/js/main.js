var myFullpage = new fullpage('#fullpage', {
  anchors: ['anchor1', 'anchor2', 'anchor3'],
  // Get your license at https://alvarotrigo.com/fullPage/pricing
  licenseKey: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
  // Optional
  menu: '#menu',
});

new fullpage('#fullpage', {
  // '#fullpage'는 fullpage.js가 적용된 전체 컨테이너 ID
  // ... 다른 옵션들 ...

  scrollOverflow: true, // 이 부분을 추가하거나 true로 변경해줘!

  // fp-auto-height 섹션이 있다면 autoHeightEnabled: true 옵션도 확인해봐 (보통 기본값)
  // autoHeightEnabled: true,

  // 만약 푸터가 fullpage 섹션들 '아래'에 완전히 분리된 영역이라면
  // autoScrolling: false 옵션을 고려해야 하지만, 이건 전체 스크롤 방식이 바뀌니 신중해야 해.
  // autoScrolling: false,

  // ... 다른 옵션들 ...
});
