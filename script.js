const bodyScroller = document.querySelector('.scroller');
bodyScrollBar = Scrollbar.init(bodyScroller, {
    speed: 10,
    damping: 0.05,
    mobile: {
        speed: 0.6
    }
});




const images = [
    "/아이엘셀리온images/bg_main_img1.png",
    "/아이엘셀리온images/bg_main_img2.png",
    "/아이엘셀리온images/bg_main_img3.png"
];

let currentImageIndex = 0; // 현재 이미지 인덱스

$('.visual').css('background-image', 'url(' + images[currentImageIndex] + ')');
$('.visual').css('background-size', '120%'); // 첫 번째 이미지는 기본적으로 크기 120%

setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;  // 이미지 순차적으로 변경

    // 배경 이미지 변경
    $('.visual').css('background-image', 'url(' + images[currentImageIndex] + ')');

    // 홀수 번째는 커지고, 짝수 번째는 작아짐
    if (currentImageIndex % 2 == 0) {
        // 홀수 번째 이미지 (0, 2, ...) 커짐 (100% -> 120%)
        $('.visual').css('background-size', '120%');
    } else {
        // 짝수 번째 이미지 (1, 3, ...) 작아짐 (120% -> 100%)
        $('.visual').css('background-size', '100%');
    }
}, 4500);  // 4.5초마다 배경 이미지 변경
