const bodyScroller = document.querySelector('.scroller');
bodyScrollBar = Scrollbar.init(bodyScroller, {
    speed: 10,
    damping: 0.05,
    mobile: {
        speed: 0.6
    }
});



var ii = 1; // 이미지 인덱스 변수
var mcnt = 2;  //변수 

$('.visual').css('background-image','url(/아이엘셀리온images/bg_main_img1.png)');
$('.visual').css('background-size', '120%');

setInterval(() => {
    // 배경 이미지 변경
    $('.visual').css('background-image','url(/아이엘셀리온images/bg_main_img' + (ii + 1) + '.png)');

    ii++;  // 이미지 순차적으로 증가

    if(ii >= 3) ii = 0; 
    

    // 홀수 번째는 커지고, 짝수 번째는 작아짐
    if (mcnt % 2 == 1) {
        // 홀수 번째 이미지 (1, 3, ...) 커짐 (100% -> 120%)
        $('.visual').css('background-size', '120%');
    } else {
        // 짝수 번째 이미지 (2, 4, ...) 작아짐 (120% -> 100%)
        $('.visual').css('background-size', '100%');
    }

    mcnt++;

}, 4500);  // 4.5초마다 배경 이미지 변경
