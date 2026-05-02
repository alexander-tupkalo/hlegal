import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

new Swiper('.team__slider', {
    modules: [Pagination, Autoplay],
    loop: true,
    speed: 800,
    spaceBetween: 30,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});