import dayjs from "dayjs";

import { getDictionary } from "@/app/[lang]/dictionaries";
import { raleway, roboto } from "@/app/fonts";
import { CLabelSection } from "@/common/components/others";

import { IMNewPosts } from "./types";

const MOCK_DATA = [
    {
        id: "7266c307-161c-455a-9683-f1e66e610822",
        title: "Trường ĐH Sư phạm TPHCM đạt giải Nhất lĩnh vực Khoa học xã hội trong Lễ tổng kết và trao Giải thưởng Khoa học và Công nghệ dành cho sinh viên năm 2022",
        slug: "what-is-lorem-ipsum",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        image: {
            id: "b8806ef9-8d65-47f4-b2d5-12cf1328af55",
            name: "um.png",
            url: "./images/banner-post.png",
        },
        category: null,
        created_at: "2023-04-20T04:58:10.552Z",
        display: 4,
    },
    {
        id: "7266c307-161c-455a-9683-f1e66e6210822",
        title: "Trường ĐH Sư phạm TPHCM đạt giải Nhất lĩnh vực Khoa học xã hội trong Lễ tổng kết và trao Giải thưởng Khoa học và Công nghệ dành cho sinh viên năm 2022",
        slug: "what-is-lorem-ipsum",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        image: {
            id: "b8806ef9-8d65-47f4-b2d5-12cf1328af55",
            name: "um.png",
            url: "./images/bb.jpg",
        },
        category: null,
        created_at: "2023-04-20T04:58:10.552Z",
        display: 4,
    },
    {
        id: "7266c307-161c-455a-9123683-f1e66e610822",
        title: "Trường ĐH Sư phạm TPHCM đạt giải Nhất lĩnh vực Khoa học xã hội trong Lễ tổng kết và trao Giải thưởng Khoa học và Công nghệ dành cho sinh viên năm 2022",
        slug: "what-is-lorem-ipsum",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        image: {
            id: "b8806ef9-8d65-47f4-b2d5-12cf1328af55",
            name: "um.png",
            url: "./images/banner-post.png",
        },
        category: {
            title: "something",
        },
        created_at: "2023-04-20T04:58:10.552Z",
        display: 4,
    },
    {
        id: "7266c307-161c-455a-923423683-f1e66e610822",
        title: "Trường ĐH Sư phạm TPHCM đạt giải Nhất lĩnh vực Khoa học xã hội trong Lễ tổng kết và trao Giải thưởng Khoa học và Công nghệ dành cho sinh viên năm 2022",
        slug: "what-is-lorem-ipsum",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        image: {
            id: "b8806ef9-8d65-47f4-b2d5-12cf1328af55",
            name: "um.png",
            url: "./images/banner-post.png",
        },
        category: null,
        created_at: "2023-04-20T04:58:10.552Z",
        display: 4,
    },
];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const MNewPosts = async ({ lang }: IMNewPosts) => {
    const d = await getDictionary(lang);
    await sleep(2000);
    return (
        <section>
            <CLabelSection label="Bài viết mới" />
            <div
                className="rounded-[20px] bg-white overflow-hidden mb-8"
                style={{
                    boxShadow: "10px 10px 60px rgba(19, 70, 131, 0.1)",
                    backdropFilter: "blur(2.5px)",
                }}
            >
                <div className="relative aspect-[860/248]">
                    <img
                        src={MOCK_DATA[0].image.url}
                        alt="img"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
                <div className="p-5 pt-3">
                    <div className="flex items-center gap-4 mb-[15px]">
                        <span className="material-icons-outlined text-primary">
                            schedule
                        </span>
                        <p
                            className={`text-primary font-semibold text-[13px] uppercase mr-4 ${roboto.className}`}
                        >
                            {dayjs(MOCK_DATA[0].created_at).fromNow()}
                        </p>
                        <span className="material-icons-outlined text-primary">
                            local_offer
                        </span>
                        <p
                            className={`text-primary font-semibold text-[13px] uppercase ${roboto.className}`}
                        >
                            {MOCK_DATA[0].category
                                ? MOCK_DATA[0].category?.title
                                : "<CATEGORY>"}
                        </p>
                    </div>
                    <h4
                        className={`text-primary font-bold text-[18px] leading-[22px] ${raleway.className}`}
                    >
                        {MOCK_DATA[0].title}
                    </h4>
                </div>
            </div>
        </section>
    );
};
