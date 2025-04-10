// scroller 설정
const bodyScroller = document.querySelector('.scroller');
bodyScrollBar = Scrollbar.init(bodyScroller, {
    speed: 10,
    damping: 0.05,
    mobile: {
        speed: 0.6
    }
});



AOS.init({
    easing: 'ease-out-quart',
    duration: 1200,
    once: true,
});

$(window).on('load', function () {
    AOS.refresh();
});






let lastScrollTop = 0;
let scrolled = false;  // 스크롤 상태를 추적할 변수

bodyScrollBar.addListener(function () {
    const delta = 15;
    const st = bodyScrollBar.scrollTop;  // 현재 스크롤 위치

    if (Math.abs(lastScrollTop - st) <= delta) return;  // 작은 차이는 무시

    
   // 스크롤 내리기
    if (st > lastScrollTop && st > delta) {
        $('.header').addClass('scroll-down').removeClass('scroll-up');
        // 스크롤 내렸을 때
    } 
    // 스크롤 올리기
    else if (st < lastScrollTop && st > delta) {
        $('.header').removeClass('scroll-down').addClass('scroll-up');
        // 스크롤 올렸을 때
    }
    

    // 스크롤이 맨 위 (top: 0)일 때, 헤더 상태 초기화
    if (st <= delta) { //st === 0 으로 하면 아주 정확하게 스크롤 해야하기 때문에 delta값으로 비교함
        $('.header').removeClass('scroll-down scroll-up');
        $('.header .logo .logo-box').removeClass('active');
        $('.header .menu-box').removeClass('active');        
        $('.header .nav-bg').removeClass('color');
        $('.header .sub-btn .img1').attr('src', '/아이엘셀리온images/btn_menu-w.svg');
        scrolled = false;
    } 
    else {
        // 스크롤이 맨 위가 아니면 헤더에 상태 추가
        $('.header .nav-bg').addClass('color');
        $('.header .logo .logo-box').addClass('active');
        $('.header .menu-box').addClass('active');
        $('.header .sub-btn .img1').attr('src', '/아이엘셀리온images/btn_menu.svg');
        scrolled = true;  // 스크롤 상태를 활성화
    }

    lastScrollTop = st;  // 마지막 스크롤 위치 업데이트
});


// mouseenter / mouseleave 처리
$('.header .menu-box > ul > li').mouseenter(function () {    
    $('.header .logo .logo-box').addClass('active');
    $('.header .menu-box').addClass('active');
    $('.header .nav-bg').addClass('active');    
});

$('.header .menu-box > ul > li').mouseleave(function () {
    if (!scrolled) {  // 만약 스크롤이 되지 않았다면
        $('.header .logo .logo-box').removeClass('active');
        $('.header .menu-box').removeClass('active');
        $('.header .nav-bg').removeClass('active');
    }

    else {        
        $('.header .nav-bg').removeClass('active');        
    }
});

// 서브 버튼 클릭 이벤트
$('.header .sub-btn').click(function () {
    $('.header .sub-btn .img1').toggle();
    $('.header .sub-btn .img2').toggle();
    $('.header .menu-box').toggleClass('show');
});







//visual이미지 효과
$('.visual').css('background-image', 'url(/아이엘셀리온images/bg_main_img1.png)');
$('.visual').css('background-size', '100%');



var ii = 0; // 이미지 변수
var mcnt = 0;  


setInterval(() => {      
    
    ii++;  //순차적으로 증가
    
    if(ii >= 3) ii = 0;    
    
    mcnt++;
    
    // 배경 이미지 변경
    $('.visual').css('background-image','url(/아이엘셀리온images/bg_main_img' + (ii + 1) + '.png)'); 
    
        
    
    if (mcnt % 2 == 1) {
        // 홀수 번째 이미지 (1, 3, ...) 커짐 (100% -> 120%)
        $('.visual').css('background-size', '120%');
    } 
    else {
        // 짝수 번째 이미지 (2, 4, ...) 작아짐 (120% -> 100%)
        $('.visual').css('background-size', '100%');
    }    
    

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
        y: '15%',
        opacity: 0,
        duration: 1,
        ease: 'Power1.easeIn',
    });
}, 4500);









//visual big-logo-text효과    
gsap.from('.visual .big-logo-text > span', {
    y: "100%",  // 아래에서 위로 올라오는 애니메이션
    duration: 0.2,
    ease: 'power1.in',
    stagger: 0.13,
});




gsap.registerPlugin(ScrollTrigger);


// section-1 fade
gsap.to('.section-1 .img-box', {
    scrollTrigger: {
        trigger: '.section-1 .img-box',
        start: 'top center',
        end: 'bottom center',
        once: true,
    },
});






// section-2 pin
gsap.set('.section-2', {
    opacity: 0.8,
}),
gsap.to('.section-2', {
    opacity: 1,
    duration: 0.3,
    ease: "none",
    scrollTrigger: {
        pin : true,
        trigger: '.section-2',
        scrub: 0.2,
        start: "top top",
        end : "50%",
        toggleActions: 'play none none reverse',
        mark: true,
    },
});





// section-3
var dur = 1,
next = 1.5,
fade = 0.3;


mm.add("(min-width: 961px)", () => {
    
    var esgImg = gsap.utils.toArray('.section-3 .s-3_info .img-box');
    gsap.set(esgImg, {
        y: 90
    });

    var esgText = gsap.utils.toArray('.section-3 .s-3_info .text-box');
    gsap.set(esgText, {
        opacity: 0
    });

    var esgEnd = esgImg.length;
    var esgImgH = 1000;
    var easContentH = esgImgH * esgEnd;

    var easAction = gsap.timeline({
        defaults: {
            ease: 'none',
            stagger: next
        },
        paused: true
    })
    .to(esgImg, {
        yPercent: 0,
        duration: dur
    })
    .to(esgText, {
        opacity: 1,
        duration: fade
    }, dur - fade)
    .to(esgText, {
        opacity: 0,
        duration: fade
    },dur*2)

    const esgSlider = gsap.fromTo(easAction, {
        time: dur
    }, {
        time: easAction.duration() - dur,
        paused: true,
    });

    ScrollTrigger.create({
        trigger: '.section-3 .s-3_info',
        start: 'top 96px',
        end: '+=' + `${easContentH}`,
        pin: true,
        animation: esgSlider,
        scrub: 0.5,
        //markers: true,
    });
})



ScrollTrigger.refresh();
ScrollTrigger.addEventListener("refresh", () => ScrollTrigger.sort());





// footer site
$('footer .f-top .site').click(function(){
    $(this).toggleClass('active');
    $('footer .f-top .site > ul').toggleClass('active');
    $('footer .f-top .site .icon .img1').toggle();
    $('footer .f-top .site .icon .img2').toggle();    
});

