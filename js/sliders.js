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