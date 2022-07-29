AOS.init()

let swipeOption = {
    loop: true,
    effect: 'fade',
    autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    },
    speed: 2000,
    }

new Swiper('.swiper-container', swipeOption);



// ↓スクロールと同時にヘッダー変化

window.addEventListener("scroll",function() {
    const header = document.querySelector("header");
    const h1 = document.querySelector("h1");
    const navList = document.querySelector("#js_nav");
    const js_logo = document.querySelector(".headerLogo_img-hide");
    const js_hide = document.querySelector(".headerLogo_img");
    const hamburger = document.querySelector(".hamburger");
    const hamburgerLine = document.querySelector(".hamburger__line");

    header.classList.toggle("header-scroll", window.scrollY>1);
    h1.classList.toggle("headerLogo_text-scroll",window.scrollY>1);
    navList.classList.toggle("globalNav_list-scroll",window.scrollY>1);
    js_logo.setAttribute("id","js_logo",window.scrollY>1);
    js_hide.setAttribute("id","js_hide",window.scrollY>1);
    hamburger.classList.toggle("hamburger-scroll",window.scrollY>1);
    hamburger.classList.toggle("hamburgerLine-scroll",window.scrollY>1);



    if(window.scrollY < 1) {
        js_logo.setAttribute("id","js_logo-hide");
        js_hide.setAttribute("id","js_hide-hide");
    }
});


// ↓モーダルウインドウ表示

const open = document.getElementById('modalButton');
const close = document.querySelector('.modalButton-close');
const modal = document.getElementById('modal');


open.addEventListener('click', function(){
    modal.classList.toggle('is-show');
});

close.addEventListener('click', function() {
    modal.classList.toggle('is-show');
})

addEventListener('click', function(close_bg){
    if(close_bg.target === modal){
        modal.classList.toggle('is-show');
    }
})


// ↓flatpicker
const config = {
    mode: "range",
    dateFormat: "Y-m-d",
    minDate:"today",
    local:"ja"
}
flatpickr('#flatpickr', config);



// ハンバーガーメニュー

const jsHamburger = document.getElementById('js-hamburger');
const body = document.body;
const spHeaderMenu = document.getElementById('js-global-menu');

jsHamburger.addEventListener('click', function() {
    body.classList.toggle('is-drawerActive')
    if(this.getAttribute('aria-expanded') == 'false') {
        this.setAttribute('aria-expanded', 'true');
        spHeaderMenu.style.visibility = "visible";
        spHeaderMenu.setAttribute('aria-hidden', 'false')
    } else {
        this.setAttribute('aria-expanded', 'false')
        spHeaderMenu.style.visibility = "hidden";
        spHeaderMenu.setAttribute('aria-hidden', 'true')
    };
});
