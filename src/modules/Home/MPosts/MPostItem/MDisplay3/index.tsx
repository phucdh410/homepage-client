import Link from "next/link";

import { sourceSerif4 } from "@/app/fonts";

const MOCK_DATA = [
    {
        id: "1",
        title: "Kết quả xét tuyển đại học chính quy năm 2022 theo...",
        category: {
            id: "12312",
            title: "tuyển sinh",
        },
        file: {
            url: "./images/list-item-image.png",
        },
        slug: "something",
    },
    {
        id: "2",
        title: "Kết quả xét tuyển đại học chính quy năm 2022 theo...",
        category: {
            id: "12312",
            title: "tuyển sinh",
        },
        file: {
            url: "./images/list-item-image.png",
        },
        slug: "something",
    },
    {
        id: "3",
        title: "Kết quả xét tuyển đại học chính quy năm 2022 theo...",
        category: {
            id: "12312",
            title: "tuyển sinh",
        },
        file: {
            url: "./images/list-item-image.png",
        },
        slug: "something",
    },
];

export const MDisplay3 = () => {
    return (
        <>
            {MOCK_DATA.map((e) => (
                <Link
                    href={e.slug}
                    key={e.id}
                    className="flex items-center gap-5 bg-white mb-[10px]"
                >
                    <div className="min-w-[100px] relative aspect-square">
                        <img
                            src={e.file.url}
                            alt="img"
                            className="absolute w-full h-full inset-0 object-cover"
                        />
                    </div>
                    <div className="px-[10px] py-[15px]">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="material-icons-outlined">
                                local_offer
                            </span>
                            <p
                                className={`text-[10px] ${sourceSerif4.className}`}
                            >
                                {e.category ? e.category.title : "<TUYỂN SINH>"}
                            </p>
                        </div>
                        <h4
                            className={`${sourceSerif4.className} text-primary font-bold text-[16px] leading-[22px]`}
                        >
                            {e.title}
                        </h4>
                    </div>
                </Link>
            ))}
        </>
    );
};
