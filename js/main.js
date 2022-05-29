import '../lib/swiper/swiper-bundle.min.js';
import '../lib/bootstrap/bootstrap.min.js';

const navbar = document.querySelector('.navbar');
const navbarPopup = navbar.querySelector('.navbar-collapse');
const navbarClose = navbar.querySelector('.btn-close');

navbarClose.addEventListener('click', () => {
    if (navbarPopup.classList.contains('show')) {
        navbarPopup.classList.remove('show');
    }

});

const swiper = new Swiper('.staff-swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,

    autoplay: {
        delay: 3000,
    },

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 3,
        },

        1366: {
            slidesPerView: 3,
        },
        1884: {
            slidesPerView: 4,
        }
    }
});