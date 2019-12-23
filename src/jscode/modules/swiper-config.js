export const swiperConfig = {
    container: '.swiper__slide-container',
    settings: {
        slidesPerView: 'auto',
        slideClass: 'swiper__slide',
        pagination: {
            el: '.swiper__buttons',
            type: 'bullets',
            bulletClass: 'swiper__button',
            bulletActiveClass: 'swiper__button_active',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper__control-slide-arrow_right',
            prevEl: '.swiper__control-slide-arrow_left'
        },
        breakpoints: {
            100: {
                spaceBetween: 8
            },
            1025: {
                spaceBetween: 12
            },
            1281: {
                spaceBetween: 16
            }
        }
    }
};