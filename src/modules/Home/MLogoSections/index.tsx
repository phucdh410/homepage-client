"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/free-mode";
import "swiper/css/pagination";

import { swiperConfig } from "./swiper.config";

import "./style.scss";

const MOCK_DATA = [
    {
        id: "1",
        name: "Tiếng Anh",
        file: { url: "./images/sections/tieng-anh.png" },
    },
    {
        id: "2",
        name: "Toán - Tin học",
        file: { url: "./images/sections/toan-tin-hoc.png" },
    },
    { id: "3", name: "CNTT", file: { url: "./images/sections/cntt.png" } },
    { id: "4", name: "Vật lý", file: { url: "./images/sections/vat-ly.png" } },
    {
        id: "5",
        name: "Hóa học",
        file: { url: "./images/sections/hoa-hoc.png" },
    },
    {
        id: "6",
        name: "Sinh học",
        file: { url: "./images/sections/sinh-hoc.png" },
    },
    {
        id: "7",
        name: "Lịch sử",
        file: { url: "./images/sections/lich-su.png" },
    },
    { id: "8", name: "Địa lý", file: { url: "./images/sections/dia-ly.png" } },
    {
        id: "9",
        name: "Tiếng Pháp",
        file: { url: "./images/sections/tieng-phap.png" },
    },
    {
        id: "10",
        name: "Tiếng Hàn",
        file: { url: "./images/sections/tieng-han.png" },
    },
    {
        id: "11",
        name: "Khoa học Giáo dục",
        file: { url: "./images/sections/khoa-hoc-giao-duc.png" },
    },
    {
        id: "12",
        name: "Giáo dục mầm non",
        file: { url: "./images/sections/giao-duc-mam-non.png" },
    },
];

export const MLogoSections = () => {
    return (
        <section>
            <div className="container mt-8">
                <Swiper {...swiperConfig}>
                    {MOCK_DATA.map((e, i) => (
                        <SwiperSlide key={e.id}>
                            <div className="relative aspect-square mb-[20px]">
                                <img
                                    src={e.file.url}
                                    alt="img"
                                    className=" inset-0 w-full h-full"
                                />
                            </div>
                            <h5 className="text-[#191919] font-bold text-[18px] leading-[24.5px] text-center">
                                Khoa
                            </h5>
                            <h5 className="text-[#191919] font-bold text-[18px] leading-[24.5px] text-center">
                                {e.name}
                            </h5>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
