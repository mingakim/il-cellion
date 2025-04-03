
//header 효과
$('.header .menu-box > ul > li').mouseenter(function(){
    $('.header .logo .logo-box').addClass('active');
    $('.header .menu-box').addClass('active');
    $('.header .nav-bg').removeClass('active color');
    $('.header .menu-box > ul > li').each(function() {        
        // 자식 ul이 있는지 확인
        if ($(this).children('ul').length > 0) {
            // 자식 ul이 있으면 .nav-bg에 .active 클래스를 추가
            $('.header .nav-bg').addClass('active');
        } else {
            // 자식 ul이 없으면 .nav-bg에 .color 클래스를 추가
            $('.header .nav-bg').addClass('color');
        }
    });
});

$('.header .menu-box > ul > li').mouseleave(function(){
    $('.header .logo .logo-box').removeClass('active');
    $('.header .menu-box').removeClass('active'); 
    $('.header .nav-bg').removeClass('active color');   
});






// scroller설정
const bodyScroller = document.querySelector('.scroller');
bodyScrollBar = Scrollbar.init(bodyScroller, {
    speed: 10,
    damping: 0.05,
    mobile: {
        speed: 0.6,
    }
});






//visual이미지 효과
var ii = 1; // 이미지 변수
var mcnt = 2;  //두번째부터 시작  

  //첫번째 이미지 지정
$('.visual').css('background-image','url(/아이엘셀리온images/bg_main_img1.png)');
$('.visual').css('background-size', '120%');

setInterval(() => {
    // 배경 이미지 변경
    $('.visual').css('background-image','url(/아이엘셀리온images/bg_main_img' + (ii + 1) + '.png)'); 

    ii++;  //순차적으로 증가

    if(ii >= 3) ii = 0;    
    

    if (mcnt % 2 == 1) {
        // 홀수 번째 이미지 (1, 3, ...) 커짐 (100% -> 120%)
        $('.visual').css('background-size', '120%');
    } else {
        // 짝수 번째 이미지 (2, 4, ...) 작아짐 (120% -> 100%)
        $('.visual').css('background-size', '100%');
    }

    mcnt++;

}, 4500);  // 4.5초마다 배경 이미지 변경







//visual visual_title 효과
var titleIndex = 0;

$('.visual .visual_title').hide();
$('.visual .visual_title:eq(0)').show();

setInterval(() => {
    titleIndex++;  //순차적으로 증가

    if(titleIndex >= 3) titleIndex = 0; 

    $('.visual .visual_title').hide();
    $('.visual .visual_title:eq(' + titleIndex + ')').show();

    gsap.from('.visual .visual_title', {
        y: '10%',
        opacity: 0.0,
        duration: 1,
        ease: 'Power1.easeIn',
    });
}, 4500);






//visual big-logo-text효과    
gsap.from('.visual .big-logo-text > span', {
    y: "100%",  // 아래에서 위로 올라오는 애니메이션
    duration: 0.2,
    ease: 'power1.in',
    stagger: 0.13
});





AOS.init();


