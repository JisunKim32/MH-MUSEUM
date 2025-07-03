// === History-select ===
// === Swiper ===
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    freeMode: true,
    mousewheel: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: { slidesPerView: 3, spaceBetween: 26 },
        576: { slidesPerView: 3, spaceBetween: 26 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        992: { slidesPerView: 2, spaceBetween: 30 },
        1200: { slidesPerView: 2.7, spaceBetween: 30 },
        1400: { slidesPerView: 2.78, spaceBetween: 30 },
        1580: { slidesPerView: 3, spaceBetween: 40 },
    },
});
// === Swiper end ===


// === Fullpage & scroll effect ===
const body = document.body;
const FOOTER_HEIGHT = 238;
let step = 0;
let isAnimating = false;

function setStepClass(newStep) {
    const title01 = document.querySelector('.content-title.title01');
    const title02 = document.querySelector('.content-title.title02');
    const swiper01 = document.querySelector('.mySwiper.swiper01');
    const swiper02 = document.querySelector('.mySwiper.swiper02');

    title01.classList.remove('active');
    title02.classList.remove('active');
    swiper01.classList.remove('active');
    swiper02.classList.remove('active');
    body.classList.remove('footer-on');

    if (newStep === 0) {
        title01.classList.add('active');
        swiper01.classList.add('active');
    } else if (newStep === 1) {
        title02.classList.add('active');
        swiper02.classList.add('active');
    } else if (newStep === 2) {
        title02.classList.add('active');
        swiper02.classList.add('active');
        body.classList.add('footer-on');
    }
}

function handleStepScroll(dir) {
    if (isAnimating) return;
    isAnimating = true;
    setTimeout(() => isAnimating = false, 700);

    if (dir === 'down') {
        if (step < 2) step++;
        setStepClass(step);
    } else if (dir === 'up') {
        if (step > 0) step--;
        setStepClass(step);
    }
}

window.addEventListener('wheel', function (e) {
    if (e.deltaY > 0) {
        handleStepScroll('down');
        e.preventDefault();
    } else if (e.deltaY < 0) {
        handleStepScroll('up');
        e.preventDefault();
    }
}, { passive: false });

window.onload = function () {
    step = 0;
    setStepClass(step);
};
// === Fullpage & scroll effect end ===


// === 모바일 스와이프 전환 효과 ===
let startY = null;

window.addEventListener('touchstart', function (e) {
    if (e.touches.length === 1) {
        startY = e.touches[0].clientY;
    }
}, { passive: false });

window.addEventListener('touchend', function (e) {
    if (startY === null) return;
    let endY = e.changedTouches[0].clientY;
    let diffY = endY - startY;

    if (Math.abs(diffY) > 50) {
        if (diffY < 0) {
            handleStepScroll('down');
        } else {
            handleStepScroll('up');
        }
    }
    startY = null;
}, { passive: false });
