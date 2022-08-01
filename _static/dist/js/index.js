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





// ハンバーガーメニュー

const jsHamburger = document.querySelector('.js-hamburger');
const body = document.body;
const spHeaderMenu = document.querySelector('.js-global-nav');

jsHamburger.addEventListener('click', function() {
    body.classList.toggle('is-drawerActive')
    if(this.getAttribute('aria-expanded') == 'false') {
        this.setAttribute('aria-expanded', 'true');
        spHeaderMenu.style.visibility = "visible";
        spHeaderMenu.setAttribute('aria-hidden', 'false')
        console.log('ok');
    } else {
        this.setAttribute('aria-expanded', 'false')
        spHeaderMenu.style.visibility = "hidden";
        spHeaderMenu.setAttribute('aria-hidden', 'true')
        console.log('no');
    };
});

