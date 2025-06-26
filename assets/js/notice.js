// news select page
document.addEventListener('DOMContentLoaded', function () {
  const newsItems = document.querySelectorAll('.news-item');
  const viewMoreBtn = document.querySelector('.viewmore-btn-button');

  let currentIndex = 0;
  const itemsToShow = 12;

  function showNextItems() {
    const nextIndex = currentIndex + itemsToShow;
    for (let i = currentIndex; i < nextIndex && i < newsItems.length; i++) {
      newsItems[i].classList.add('show');
    }
    currentIndex = nextIndex;

    if (currentIndex >= newsItems.length) {
      viewMoreBtn.style.display = 'none';
    }
  }

  showNextItems();

  viewMoreBtn.addEventListener('click', showNextItems);
});

// notice select page
document.addEventListener('DOMContentLoaded', function () {
  const noticeItems = document.querySelectorAll('.notice-item');
  const noticeViewmoreBtn = document.querySelector('.notice-viewmore-btn');

  let currentIndex = 0;
  const itemsToShow = 10;

  function showNextItems() {
    const nextIndex = currentIndex + itemsToShow;
    for (let i = currentIndex; i < nextIndex && i < noticeItems.length; i++) {
      noticeItems[i].classList.add('show');
    }
    currentIndex = nextIndex;

    if (currentIndex >= noticeItems.length) {
      noticeViewmoreBtn.style.display = 'none';
    }
  }

  showNextItems();

  noticeViewmoreBtn.addEventListener('click', showNextItems);
});
