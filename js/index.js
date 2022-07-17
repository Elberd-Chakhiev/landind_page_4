
const feedback_slider = new Swiper('.feedback-slider', {
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})

const cards_slider = new Swiper('.cards--sllider', {
    effect: 'cards', 
    grabCursor: true,
})


const menu = document.querySelector('#main_menu')
const triggers = document.querySelectorAll('.open-close')

for (let index = 0; index < triggers.length; index++) {
    triggers[index].addEventListener('click', ()=> {
        menu.classList.toggle('md:-translate-x-full')
    })
}



AOS.init()
AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate', 
    useClassNames: false, 
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99,


    offset: 120,
    delay: 0, 
    duration: 400,
    easing: 'ease', 
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom', 
})

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}



