// scroller 설정
const bodyScroller = document.querySelector('.scroller');
bodyScrollBar = Scrollbar.init(bodyScroller, {
    speed: 10,
    damping: 0.05,
    mobile: {
        speed: 0.6
    }
});


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




bodyScrollBar.addListener(function (){
    let lastScrollTop = 0;
    const delta = 15;    
    const st = bodyScrollBar.scrollTop;
    if(Math.abs(lastScrollTop - st) <= delta) return;
    if(st > lastScrollTop && st > lastScrollTop > 0) {
        $('.header').addClass('scroll-down').removeClass('scroll-up');   
        // 스크롤 내렸을 때
    }
    else {
        $('.header').removeClass('scroll-down').addClass('scroll-up');
        // 스크롤 올렸을 때
    };
    lastScrollTop = st;    
});











//visual이미지 효과


$('.visual').css('background-image', 'url(/아이엘셀리온images/bg_main_img1.png)')
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
    } else {
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










AOS.init({
    easing: 'ease-out-quart',
    duration: 1200,
    once: true,
});





gsap.registerPlugin(ScrollTrigger);
let getAllAos = Array.prototype.slice.call(document.querySelectorAll('[data-aos]'));
getAllAos.length > 0 && getAllAos.forEach((item) => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top center',
            end: 'bottom center',
            once: true,
            onEnter: (scroll) => {
                item.classList.add('aos-animate');
            }
        }
    })
});




gsap.to('.pin', {
    immediateRender: false,
    scrollTrigger: {
    trigger: ".section-2",
    pin: true,
    scrub: true,
    start:'top top',
    end: 'bottom top',
    markers: true,
    id: 'one'
    }
});