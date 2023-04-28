"use client";

import { Swiper, SwiperSlide } from "swiper/react";

const MOCK_DATA = [
    { id: "1", name: "Tiếng Anh", file: { url: "./images/tieng-anh.png" } },
    {
        id: "2",
        name: "Toán - Tin học",
        file: { url: "./images/tieng-anh.png" },
    },
    { id: "3", name: "CNTT", file: { url: "./images/tieng-anh.png" } },
    { id: "4", name: "Vật lý", file: { url: "./images/vat-ly.png" } },
    { id: "5", name: "Hóa học", file: { url: "./images/hoa-hoc.png" } },
    { id: "6", name: "Sinh học", file: { url: "./images/sinh-hoc.png" } },
    { id: "7", name: "Lịch sử", file: { url: "./images/lich-su.png" } },
    { id: "8", name: "Địa lý", file: { url: "./images/dia-ly.png" } },
    { id: "9", name: "Tiếng Pháp", file: { url: "./images/tieng-phap.png" } },
    { id: "10", name: "Tiếng Hàn", file: { url: "./images/tieng-han.png" } },
    {
        id: "11",
        name: "Khoa học Giáo dục",
        file: { url: "./images/khoc-hoc-giao-duc.png" },
    },
    {
        id: "12",
        name: "Giáo dục mầm non",
        file: { url: "./images/giao-duc-mam-non.png" },
    },
];

export const MLogoSections = () => {
    return (
        <section>
            <div className="container mt-8">
                <Swiper spaceBetween={50} slidesPerView={5} freeMode>
                    {MOCK_DATA.map((e, i) => (
                        <SwiperSlide key={e.id}>{`Slide ${i}`}</SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
