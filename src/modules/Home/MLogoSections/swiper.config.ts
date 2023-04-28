import { FreeMode, Pagination } from "swiper";
import { SwiperProps } from "swiper/react";

export const swiperConfig: SwiperProps = {
    className: "swiper-logo",
    slidesPerView: 2,
    spaceBetween: 10,
    modules: [FreeMode, Pagination],
    freeMode: true,
    grabCursor: true,
    pagination: { clickable: true },
    breakpoints: {
        640: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 5, spaceBetween: 30 },
        1366: { slidesPerView: 6, spaceBetween: 50 },
    },
};
